import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { getRecentPosts } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPostList from "@/components/blog/BlogPostList";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const recentPosts = getRecentPosts(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    recentPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [recentPosts]);

  const filteredPosts = useMemo(() => {
    let posts = recentPosts;

    // Filter by selected tag
    if (selectedTag) {
      posts = posts.filter((post) => post.tags.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [recentPosts, searchQuery, selectedTag]);

  return (
    <BlogLayout>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Sven Malvik's Blog</h1>
        <p className="text-base text-muted-foreground mt-1">
          Thoughts on AI, cloud architecture, and software engineering.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="relative mt-3">
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
