import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 bg-background relative" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* abstract professional portrait fallback */}
            <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
              <img 
                src="/images/profile.jpg" 
                alt="Leif Janzik Profile" 
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"; }}
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-20" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[64px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Leif Janzik: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Digital Leader</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As an experienced IT executive, I specialize in navigating the complexities of modern digital landscapes. My approach combines strategic vision with technical depth to build resilient, innovative organizations that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">15<span className="text-primary">+</span></h4>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">30<span className="text-primary">+</span></h4>
                <p className="text-muted-foreground font-medium">Core Projects</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">50<span className="text-primary">+</span></h4>
                <p className="text-muted-foreground font-medium">Team Members Led</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">99.9<span className="text-primary">%</span></h4>
                <p className="text-muted-foreground font-medium">System Uptime</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
