"use client";

import { useEffect, useState } from "react";
import { getBlogPostById } from "@/lib/payload";
import { richTextToHTML } from "@/lib/richTextToHtml";
import { BlogPost } from "@/types/blog.type";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogPostPage() {
  const { id } = useParams(); // ✅ Get the `id` from URL params
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      setLoading(true);
      try {
        const data = await getBlogPostById(id as string);
        if (!data) throw new Error("Blog post not found");

        setBlogPost(data);
        setContent(richTextToHTML(data.content));
      } catch (error) {
        setError("Failed to fetch blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!blogPost) {
    return <p className="text-center mt-10 text-gray-500">No content found</p>;
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold">{blogPost.title}</h1>
          <p className="mt-3 text-lg">
            {blogPost.blogName} by <span className="font-semibold">{blogPost.author}</span> -{" "}
            {new Date(blogPost.publishedDate).toLocaleDateString()}
          </p>
          <p className="mt-2 text-sm opacity-80">{blogPost.contentFocus}</p>
        </div>
      </header>

      {/* Blog Content Section */}
      <section className="relative -mt-16 max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-lg">
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>

        {/* Back to Blog List */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
