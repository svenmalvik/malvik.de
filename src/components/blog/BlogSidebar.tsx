import { Link, useSearchParams } from "react-router-dom";
import { getArchiveYears } from "@/lib/blog";
import { cn } from "@/lib/utils";

const BlogSidebar = () => {
  const archiveYears = getArchiveYears();
  const [searchParams] = useSearchParams();
  const currentYear = searchParams.get("year");

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Archive</h3>
        <nav className="space-y-2">
          <Link
            to="/blog"
            className={cn(
              "flex justify-between text-sm transition-colors",
              !currentYear
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <span>All Posts</span>
          </Link>
          {archiveYears.map(({ year, count }) => (
            <Link
              key={year}
              to={`/blog/archive?year=${year}`}
              className={cn(
                "flex justify-between text-sm transition-colors",
                currentYear === String(year)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span>{year}</span>
              <span className="text-xs">({count})</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default BlogSidebar;
