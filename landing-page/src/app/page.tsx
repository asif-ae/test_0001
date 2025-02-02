import { getBlogPosts, getLandingPageContent } from "@/lib/payload";
import { BlogPost } from "@/types/blog.type";
import { LandingPageContent } from "@/types/landingPage.type";
import Link from "next/link";

export default async function HomePage() {
  const landingPage: LandingPageContent = await getLandingPageContent();
  const blogPosts: BlogPost[] = await getBlogPosts();

  // Global check for missing content
  if ((!landingPage && blogPosts.length === 0) || !landingPage) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">🚧 Content Not Available</h1>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400">
            The landing page or blog posts are not available at the moment.
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Please check back later or contact the administrator.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-500 text-white text-center py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold leading-tight">
            {landingPage.heroTitle}
          </h1>
          <p className="text-xl mt-4 opacity-90">{landingPage.heroSubtitle}</p>
          <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all shadow-lg text-lg">
            {landingPage.heroCTAButton}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Why Choose Us?
        </h2>
        <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {landingPage.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Latest Blog Posts
        </h2>
        <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogPosts.length === 0 ? (
            <p className="text-center text-gray-500">
              No blog posts available.
            </p>
          ) : (
            blogPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">{post.blogName}</span> by{" "}
                  {post.author}
                </p>
                <p className="text-sm text-gray-500">{post.contentFocus}</p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 font-semibold transition"
                >
                  Read More →
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-500 text-white text-center">
        <h2 className="text-4xl font-semibold">{landingPage.ctaHeadline}</h2>
        <p className="mt-4 text-lg opacity-90">{landingPage.ctaSubheadline}</p>
        <button className="mt-6 px-8 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg text-lg">
          {landingPage.ctaButton}
        </button>
      </section>
    </main>
  );
}
