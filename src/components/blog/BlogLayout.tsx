import { ReactNode } from "react";
import BlogSidebar from "./BlogSidebar";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-12 justify-center max-w-5xl mx-auto">
          <main className="flex-1 max-w-3xl">{children}</main>
          <div className="lg:w-64 shrink-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
