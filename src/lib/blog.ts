import fm from "front-matter";
import type { BlogPost, ArchiveYear } from "@/types/blog";

interface FrontMatterAttributes {
  title?: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
}

// Load all markdown files at build time
const modules = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseMarkdownFile(filepath: string, content: string): BlogPost {
  const parsed = fm<FrontMatterAttributes>(content);
  const data = parsed.attributes;
  const markdownContent = parsed.body;

  // Extract slug from filename (e.g., "2025-01-04-hello-world.md" -> "hello-world")
  const filename = filepath.split("/").pop() || "";
  const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");

  return {
    title: data.title || "Untitled",
    date: data.date || "",
    tags: data.tags || [],
    slug,
    content: markdownContent,
    excerpt: data.excerpt,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(modules).map(([filepath, content]) =>
    parseMarkdownFile(filepath, content)
  );

  // Sort by date descending (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentPosts(count: number = 10): BlogPost[] {
  return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByYear(year: number): BlogPost[] {
  return getAllPosts().filter(
    (post) => new Date(post.date).getFullYear() === year
  );
}

export function getArchiveYears(): ArchiveYear[] {
  const posts = getAllPosts();
  const yearCounts = new Map<number, number>();

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    yearCounts.set(year, (yearCounts.get(year) || 0) + 1);
  });

  return Array.from(yearCounts.entries())
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year - a.year);
}
