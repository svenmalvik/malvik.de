import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import type { BlogPost as BlogPostType } from "@/types/blog";
import BlogTags from "./BlogTags";

interface BlogPostProps {
  post: BlogPostType;
  fullPage?: boolean;
}

const BlogPost = ({ post, fullPage = false }: BlogPostProps) => {
  const formattedDate = format(parseISO(post.date), "MMMM d, yyyy");
  // Show excerpt only if post has one and we're not on the full page
  const showExcerpt = post.excerpt && !fullPage;

  return (
    <article className="animate-fade-in">
      <header className="mb-3">
        <time className="text-sm font-semibold uppercase tracking-wide text-primary">
          {formattedDate}
        </time>
        {fullPage ? (
          <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-2 text-foreground">
            {post.title}
          </h2>
        ) : (
          <Link to={`/blog/${post.slug}`} className="block group">
            <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h2>
          </Link>
        )}
        <BlogTags tags={post.tags} />
      </header>

      {showExcerpt ? (
        <div>
          <p className="text-muted-foreground mb-3">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary hover:underline font-medium"
          >
            Read more →
          </Link>
        </div>
      ) : (
        <div className="prose prose-sm prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:mt-2 prose-headings:mb-1 prose-p:my-4 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:text-sm prose-pre:border prose-pre:border-border">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
