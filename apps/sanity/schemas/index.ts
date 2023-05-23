// types
import content from './types/content'
import heroComponent from './page-components/hero-component'
import textComponent from './page-components/text-component'
import pageComponents from './page-components'

// documents
import page from './page'
import person from './person'
import blogPost from './blog-post'

export const schemaTypes = [
  // types
  content,
  heroComponent,
  textComponent,
  pageComponents,

  // documents
  page,
  person,
  blogPost,
]

export default schemaTypes
