import { useSearchParams } from "react-router-dom";
import { getAllPosts, getPostsByYear } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPostList from "@/components/blog/BlogPostList";

const BlogArchive = () => {
  const [searchParams] = useSearchParams();
  const yearParam = searchParams.get("year");

  const posts = yearParam
    ? getPostsByYear(parseInt(yearParam, 10))
    : getAllPosts();

  return (
    <BlogLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          {yearParam ? `Archive: ${yearParam}` : "All Posts"}
        </h1>
        <p className="text-base text-muted-foreground mt-1">
          {yearParam
            ? `All posts from ${yearParam}`
            : "Complete archive of all blog posts"}
        </p>
      </header>

      <BlogPostList posts={posts} />
    </BlogLayout>
  );
};

export default BlogArchive;
