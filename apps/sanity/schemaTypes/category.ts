import { defineField, defineType } from "sanity";

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required().error("Category needs a slug to be able to open the Category-page")
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
  ]
})
