import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.resolve(process.cwd(), "content/blog");
const OUTPUT_FILE = path.resolve(process.cwd(), "client/src/data/blog-posts.json");

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
}

function generateBlogData() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log("No content/blog directory found, writing empty array.");
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts: BlogPost[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const contentHtml = marked.parse(content) as string;
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      contentHtml,
    };
  });

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  const outDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`Generated ${posts.length} blog posts → ${OUTPUT_FILE}`);
}

generateBlogData();
