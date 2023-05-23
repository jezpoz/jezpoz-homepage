export default {
  type: 'object',
  name: 'heroComponent',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sub title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'links',
      title: 'Links (internal)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}, {type: 'blog-post'}],
        },
      ],
    },
  ],
}
