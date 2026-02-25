import { motion } from "framer-motion";
import { experiences } from "@/data/cv";

export function Experience() {
  return (
    <section className="py-32 bg-card relative overflow-hidden" id="experience">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Beruflicher <span className="text-primary">Werdegang</span></h2>
          <p className="text-xl text-muted-foreground">Eine Karriere im Zeichen von IT-Exzellenz, vom technischen Engineering bis zur strategischen Führung.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[15px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent transform md:-translate-x-1/2" />

          {experiences.sort((a, b) => a.order - b.order).map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-[11px] md:left-1/2 w-2.5 h-2.5 bg-primary rounded-full transform md:-translate-x-1/2 mt-2 ring-4 ring-background" />

              <div className="hidden md:block md:w-1/2" />
              
              <div className={`pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary font-mono text-sm tracking-wider uppercase mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-primary/80 mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
