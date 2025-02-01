import { createHeadlessEditor } from "@lexical/headless";
import { $generateHtmlFromNodes } from "@lexical/html";

// Import necessary Lexical nodes
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ParagraphNode, TextNode } from "lexical";

// Ensure Lexical only runs in a browser
const isBrowser = typeof window !== "undefined";

export const richTextToHTML = (richTextData: any): string => {
  if (!isBrowser) return "<p>Content not available on server.</p>";

  const editor = createHeadlessEditor({
    nodes: [ListNode, ListItemNode, HeadingNode, QuoteNode, ParagraphNode, TextNode],
  });

  let htmlString = "";

  editor.setEditorState(editor.parseEditorState(richTextData));

  editor.update(() => {
    htmlString = $generateHtmlFromNodes(editor, null);
  });

  return htmlString;
};
