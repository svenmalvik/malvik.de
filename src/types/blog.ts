export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  content: string;
  excerpt?: string;
}

export interface ArchiveYear {
  year: number;
  count: number;
}
