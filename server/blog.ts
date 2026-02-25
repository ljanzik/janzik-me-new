import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface BlogPostFull extends BlogPostMeta {
  contentHtml: string;
}

const BLOG_DIR = path.resolve(process.cwd(), "content/blog");

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getMarkdownFiles();
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPostFull | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content) as string;
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    contentHtml,
  };
}
