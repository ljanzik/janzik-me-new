import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useBlogPosts } from "@/hooks/use-cv";

export function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <section className="py-32 bg-background relative" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Aktuelle <span className="text-primary">Insights</span></h2>
            <p className="text-xl text-muted-foreground">Gedanken zu IT-Strategie, KI-gestützter Führung und moderner Transformation.</p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-72 bg-muted rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts?.slice(0, 3).map((post: any, index: number) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="mb-6 overflow-hidden rounded-2xl aspect-[16/9] bg-muted relative">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <span className="text-sm font-mono text-primary mb-2 block">{new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors" data-testid={`blog-title-${post.slug}`}>{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:gap-4 transition-all">
                    Weiterlesen <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
