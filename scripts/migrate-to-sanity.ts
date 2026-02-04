/**
 * Migration script to move existing insights from JSON to Sanity
 *
 * Usage:
 *   npx ts-node --esm scripts/migrate-to-sanity.ts
 *   or
 *   npx sanity exec scripts/migrate-to-sanity.ts --with-user-token
 *
 * Requirements:
 *   - SANITY_PROJECT_ID
 *   - SANITY_DATASET
 *   - SANITY_WRITE_TOKEN (generate from Sanity dashboard)
 */

import { createClient } from "@sanity/client";
import * as fs from "fs";
import * as path from "path";

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("Missing required environment variables:");
  console.error("  SANITY_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID)");
  console.error("  SANITY_DATASET (or NEXT_PUBLIC_SANITY_DATASET)");
  console.error("  SANITY_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

interface JsonInsight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

// Convert plain text/markdown content to Portable Text blocks
function contentToPortableText(content: string) {
  const lines = content.split("\n");
  const blocks: Array<{
    _type: string;
    _key: string;
    style: string;
    children: Array<{ _type: string; _key: string; text: string }>;
  }> = [];

  let currentParagraph = "";
  let keyCounter = 0;

  const createBlock = (text: string, style: string = "normal") => ({
    _type: "block",
    _key: `block-${keyCounter++}`,
    style,
    children: [{ _type: "span", _key: `span-${keyCounter++}`, text }],
  });

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      continue;
    }

    // Handle markdown headings
    if (trimmed.startsWith("#### ")) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      blocks.push(createBlock(trimmed.slice(5), "h4"));
    } else if (trimmed.startsWith("### ")) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      blocks.push(createBlock(trimmed.slice(4), "h3"));
    } else if (trimmed.startsWith("## ")) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      blocks.push(createBlock(trimmed.slice(3), "h2"));
    } else if (trimmed.startsWith("# ")) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      blocks.push(createBlock(trimmed.slice(2), "h2"));
    } else if (trimmed.startsWith("• ") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (currentParagraph) {
        blocks.push(createBlock(currentParagraph));
        currentParagraph = "";
      }
      blocks.push(createBlock(trimmed.slice(2)));
    } else {
      currentParagraph += (currentParagraph ? " " : "") + trimmed;
    }
  }

  if (currentParagraph) {
    blocks.push(createBlock(currentParagraph));
  }

  return blocks;
}

async function migrate() {
  console.log("Starting migration to Sanity...\n");

  // Read insights from JSON file
  const jsonPath = path.join(process.cwd(), "data", "insights.json");

  if (!fs.existsSync(jsonPath)) {
    console.error(`File not found: ${jsonPath}`);
    process.exit(1);
  }

  const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  const insights: JsonInsight[] = jsonData.insights || [];

  console.log(`Found ${insights.length} insights to migrate\n`);

  const transaction = client.transaction();

  for (const insight of insights) {
    const doc = {
      _id: `insight-${insight.slug}`,
      _type: "insight",
      title: insight.title,
      slug: { _type: "slug", current: insight.slug },
      excerpt: insight.excerpt,
      content: contentToPortableText(insight.content),
      categories: insight.categories,
      image: insight.image,
      author: insight.author,
      publishedAt: insight.publishedAt,
      readTime: insight.readTime,
    };

    transaction.createOrReplace(doc);
    console.log(`Prepared: ${insight.title}`);
  }

  console.log("\nCommitting transaction...");
  await transaction.commit();
  console.log("\nMigration complete!");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
