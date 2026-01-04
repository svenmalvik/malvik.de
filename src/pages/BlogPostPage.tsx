import { useParams, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPost from "@/components/blog/BlogPost";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogLayout>
      <BlogPost post={post} fullPage />
    </BlogLayout>
  );
};

export default BlogPostPage;
