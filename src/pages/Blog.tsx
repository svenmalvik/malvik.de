import { getRecentPosts } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPostList from "@/components/blog/BlogPostList";

const Blog = () => {
  const recentPosts = getRecentPosts(10);

  return (
    <BlogLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Sven Malvik's Blog</h1>
        <p className="text-base text-muted-foreground mt-1">
          Thoughts on AI, cloud architecture, and software engineering.
        </p>
      </header>

      <BlogPostList posts={recentPosts} />
    </BlogLayout>
  );
};

export default Blog;
