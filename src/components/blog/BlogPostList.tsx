import { Separator } from "@/components/ui/separator";
import type { BlogPost as BlogPostType } from "@/types/blog";
import BlogPost from "./BlogPost";

interface BlogPostListProps {
  posts: BlogPostType[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  if (!posts.length) {
    return (
      <p className="text-muted-foreground text-center py-12">
        No posts yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <div key={post.slug}>
          <BlogPost post={post} />
          {index < posts.length - 1 && <Separator className="mt-6" />}
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
