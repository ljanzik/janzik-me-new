import { useParams, Link } from "wouter";
import { useBlogPost } from "@/hooks/use-cv";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug || "");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-primary font-medium mb-12 hover:gap-3 transition-all" data-testid="link-back-blog">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
          </Link>

          {isLoading ? (
            <div className="space-y-6">
              <div className="h-12 bg-muted rounded-xl animate-pulse w-3/4" />
              <div className="h-6 bg-muted rounded animate-pulse w-1/4" />
              <div className="h-96 bg-muted rounded-xl animate-pulse" />
            </div>
          ) : post ? (
            <article>
              <header className="mb-12">
                <span className="text-sm font-mono text-primary mb-4 block">
                  {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight" data-testid="text-blog-title">
                  {post.title}
                </h1>
              </header>

              <div
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>
          ) : (
            <div className="text-center py-24">
              <h2 className="text-2xl font-display font-bold mb-4">Beitrag nicht gefunden</h2>
              <p className="text-muted-foreground">Der angeforderte Blog-Beitrag existiert nicht.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
