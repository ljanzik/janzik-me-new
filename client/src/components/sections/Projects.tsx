import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useProjects } from "@/hooks/use-cv";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <section className="py-32 bg-card relative" id="projects">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Key <span className="text-primary">Achievements</span></h2>
            <p className="text-xl text-muted-foreground">Selected highlights of high-impact IT projects and transformations.</p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-80 bg-white/5 rounded-3xl animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden flex flex-col shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowUpRight className="text-primary w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-4 pr-12">{proj.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">{proj.description}</p>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2">The Impact</span>
                  <p className="text-foreground font-medium">{proj.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
