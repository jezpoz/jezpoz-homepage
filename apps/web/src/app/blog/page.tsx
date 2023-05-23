import Link from "next/link";
import sanityClient from "@/resources/sanity-client";

async function getBlogPageAndPosts() {
  const blogPage = await sanityClient.fetch<SanityTypes.Page>({
    query: `*[_type == 'page' && slug.current == 'blog'][0]`,
  });
  const blogPosts = await sanityClient.fetch<SanityTypes.BlogPost[]>({
    query: `*[_type == 'blog-post']`,
  });
  return {
    blogPage,
    blogPosts,
  };
}

export default async function BlogPage() {
  const { blogPage, blogPosts } = await getBlogPageAndPosts();
  return (
    <section className="max-w-[900px] mx-auto py-4 px-8 lg:px-0">
      <h1 className="text-5xl font-bold pb-8">{blogPage.title}</h1>
      <div className="flex flex-col gap-2">
        {blogPosts.map((blogPost) => (
          <Link
            key={blogPost._id}
            as={`/blog/${blogPost.slug.current}`}
            href={`/blog/[slug]`}
          >
            <h2>{blogPost.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
