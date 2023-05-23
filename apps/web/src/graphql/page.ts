import groq from "groq";

export const getPageQuery: string = groq`
  *[_type == 'page' && slug.current == $slug][0]
`;
