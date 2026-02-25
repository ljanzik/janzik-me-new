import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* abstract modern architecture/tech background fallback */}
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"; }}
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">Digital Leader & IT Executive</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Leif Janzik.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-900">
              Digital Excellence.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed">
            Gestaltung der digitalen Transformation und Führung leistungsstarker IT-Organisationen mit Fokus auf Innovation und nachhaltiges Wachstum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#experience"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Werdegang ansehen <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground border border-border font-semibold text-lg flex items-center justify-center backdrop-blur-md hover:bg-secondary/80 transition-all"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
