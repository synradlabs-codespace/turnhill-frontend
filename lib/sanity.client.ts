import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

// Check if Sanity is properly configured (not placeholder values)
export const isSanityConfigured =
  projectId &&
  projectId !== "placeholder" &&
  projectId !== "your_project_id" &&
  /^[a-z0-9]{8}$/.test(projectId); // Sanity project IDs are 8 alphanumeric chars

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;
