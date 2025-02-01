export type BlogPost = {
  id: string;
  blogName: string;
  author: string;
  contentFocus: string;
  title: string;
  summary: string;
  content: any; // We will process this with Lexical
  publishedDate: string;
};
