/* eslint-disable turbo/no-undeclared-env-vars */
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "",
});

export default function ImageBuilderFor(
  source: SanityImageSource
): ImageUrlBuilder {
  return builder.image(source);
}
