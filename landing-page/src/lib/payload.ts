import { BlogPost } from "@/types/blog.type";

export const getLandingPageContent = async () => {
  const res = await fetch("http://localhost:4000/api/landing-page?limit=1", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Landing Page content");
  }

  const data = await res.json();
  return data.docs[0]; // Get the first document
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const res = await fetch("http://localhost:4000/api/blog-posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blog Posts");
  }

  const data = await res.json();
  return data.docs;
};

export const getBlogPostById = async (id: string): Promise<BlogPost> => {
  const res = await fetch(`http://localhost:4000/api/blog-posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blog Post");
  }

  return res.json();
};

