export default {
  name: 'blog-post',
  type: 'document',
  title: 'Blog post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      type: 'reference',
      name: 'author',
      title: 'Author',
      to: [{type: 'person'}],
    },
    {
      title: 'Poster',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'altText',
          type: 'string',
          title: 'Alt text',
        },
      ],
    },
    {
      name: 'content',
      type: 'content',
      title: 'Content',
    },
  ],
}
