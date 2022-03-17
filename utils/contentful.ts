import { createClient } from "contentful";

export const clientDetails = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  return client;
};

export const contentfulClient = async (contentType: string) => {
  const res = await clientDetails().getEntries({
    content_type: contentType,
  });
  return res.items;
};
