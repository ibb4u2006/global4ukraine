import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const contentfulClient = async (contentType: string) => {
  const res = await client.getEntries({
    content_type: contentType,
  });
  return res.items;
};
