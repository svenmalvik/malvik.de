import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format, parseISO } from "date-fns";
import type { BlogPost as BlogPostType } from "@/types/blog";
import BlogTags from "./BlogTags";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const formattedDate = format(parseISO(post.date), "MMMM d, yyyy");

  return (
    <article className="animate-fade-in">
      <header className="mb-3">
        <time className="text-sm font-semibold uppercase tracking-wide text-primary">
          {formattedDate}
        </time>
        <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-2 text-foreground">
          {post.title}
        </h2>
        <BlogTags tags={post.tags} />
      </header>

      <div className="prose prose-sm prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
