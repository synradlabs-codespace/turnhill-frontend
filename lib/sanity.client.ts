import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "v2026-02-12";
const regex = /^[a-z0-9]{8}$/;


// console.log("========== SANITY CONFIG DEBUG ==========");
// console.log("RAW PROJECT ID:", JSON.stringify(projectId));
// console.log("PROJECT ID LENGTH:", projectId?.length);
// console.log("REGEX MATCH:", regex.test(projectId || ""));
// console.log("DATASET:", dataset);
// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("=========================================");

// Check if Sanity is properly configured (not placeholder values)
export const isSanityConfigured =
  projectId &&
  projectId !== "placeholder" &&
  projectId !== "your_project_id" &&
  regex.test(projectId || "");; // Sanity project IDs are 8 alphanumeric chars


// console.log("isSanityConfigured:", isSanityConfigured);

export const client = isSanityConfigured
  ? createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
  })
  : null;



// if (client !== null) {
//   console.log("Testing Sanity client with a simple query...");

//   const test = await client.fetch('*[_type == "insight"][0]');

//   console.log("TEST RESULT:", test);
//   console.log("Sanity client test query executed successfully.");
// }

// console.log("Sanity client created:", client !== null);

