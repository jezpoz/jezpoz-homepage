/* eslint-disable turbo/no-undeclared-env-vars */
import SanityClient from "next-sanity-client";

const client = new SanityClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",
  useCdn: process.env.SANITY_STUDIO_USE_CDN === "true",
  apiVersion: process.env.SANITY_STUDIO_API_VERSION || "",
});

export default client;
