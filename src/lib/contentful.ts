import * as contentful from "contentful";

const space = import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const contentfulClient =
  space && accessToken
    ? contentful.createClient({
        space,
        accessToken,
      })
    : null;
