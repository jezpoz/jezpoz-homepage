import PageComponents from "@/components/PageComponents";
import sanityClient from "@/resources/sanity-client";
import { Page } from "sanity-types";
import groq from "groq";

const query = groq`
  *[_type == "page" && slug.current == "index"][0]{
    ...,
    components[]{
      ...,
      _type,
      links[]->{_type, title, slug},
    }
  }
`;

async function getPage() {
  const response = await sanityClient.fetch<Page>({
    query: query,
  });
  return response;
}

export default async function Home() {
  const page = await getPage();

  return (
    <section>
      {page?.components && <PageComponents components={page.components} />}
    </section>
  );
}
