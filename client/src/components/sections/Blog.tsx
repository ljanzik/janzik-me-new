import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Die Zukunft der IT-Führung",
    excerpt: "Wie sich die Rolle des CIO in Zeiten von KI und Cloud-Native verändert.",
    date: "15. Feb 2024",
    slug: "zukunft-it-fuehrung"
  },
  {
    title: "Resiliente Organisationen aufbauen",
    excerpt: "Strategien für nachhaltiges Wachstum und operative Exzellenz.",
    date: "02. Jan 2024",
    slug: "resiliente-organisationen"
  },
  {
    title: "Digitale Transformation im Mittelstand",
    excerpt: "Herausforderungen und Chancen der Modernisierung von Legacy-Systemen.",
    date: "20. Nov 2023",
    slug: "digitale-transformation-mittelstand"
  }
];

export function Blog() {
  return (
    <section className="py-32 bg-background relative" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Aktuelle <span className="text-primary">Insights</span></h2>
            <p className="text-xl text-muted-foreground">Gedanken zu IT-Strategie, digitaler Transformation und moderner Führung.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            Alle Beiträge <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-2xl aspect-[16/9] bg-muted relative">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              </div>
              <span className="text-sm font-mono text-primary mb-2 block">{post.date}</span>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                Weiterlesen <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
