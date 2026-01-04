import { Badge } from "@/components/ui/badge";

interface BlogTagsProps {
  tags: string[];
}

const BlogTags = ({ tags }: BlogTagsProps) => {
  if (!tags.length) return null;

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default BlogTags;
