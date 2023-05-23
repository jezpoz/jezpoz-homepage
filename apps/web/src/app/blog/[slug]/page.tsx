import PortableContent from "@/components/PortableText";
import sanityClient from "@/resources/sanity-client";

async function getBlogPost(blogSlug: string): Promise<SanityTypes.BlogPost> {
  const blogPost = await sanityClient.fetch<SanityTypes.BlogPost>({
    query: `*[_type == 'blog-post' && slug.current == '${blogSlug}'][0]`,
  });

  if (!blogPost) {
    throw new Error("Blog post not found!");
  }

  return blogPost;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blogPost = await getBlogPost(slug);

  return (
    <div>
      <PortableContent value={blogPost.content} />
    </div>
  );
}
