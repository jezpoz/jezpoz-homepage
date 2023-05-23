import PageComponents from "@/components/PageComponents";
import sanityClient from "@/resources/sanity-client";
import { Page } from "sanity-types";
import groq from "groq";

const query = groq`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    components[]{
      ...,
      _type,
      links[]->{_type, title, slug},
    }
  }
`;

async function getPage(pageSlug: string) {
  const response = await sanityClient.fetch<Page>({
    query: query,
    params: {
      slug: pageSlug,
    },
  });
  return response;
}

export default async function DynamicPage({
  params,
}: {
  params: { page: string };
}) {
  const { page } = params;
  const data = await getPage(page);

  return (
    <section className="max-w-[900px] mx-auto py-4 px-8 lg:px-0">
      {data?.components && <PageComponents components={data.components} />}
    </section>
  );
}
