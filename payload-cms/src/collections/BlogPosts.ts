import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  access: { read: () => true },
  fields: [
    {
      name: "blogName",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "contentFocus",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
    },
  ],
};

export default BlogPosts;

