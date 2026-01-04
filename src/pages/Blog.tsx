import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { getRecentPosts } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPostList from "@/components/blog/BlogPostList";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const recentPosts = getRecentPosts(10);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return recentPosts;
    const query = searchQuery.toLowerCase();
    return recentPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [recentPosts, searchQuery]);

  return (
    <BlogLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Sven Malvik's Blog</h1>
        <p className="text-base text-muted-foreground mt-1">
          Thoughts on AI, cloud architecture, and software engineering.
        </p>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 max-w-sm"
          />
        </div>
      </header>

      <BlogPostList posts={filteredPosts} />
    </BlogLayout>
  );
};

export default Blog;
