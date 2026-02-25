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
            <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
              <img 
                src="/images/profile.jpg" 
                alt="Leif Janzik" 
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"; }}
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-20" />
            </div>
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
                Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-800">mich</span>
              </h2>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Als erfahrene Führungskraft bewege ich mich an der <strong className="text-foreground">Schnittstelle zwischen Technik, Vertrieb, Kunden und Fachbereichen</strong>. Mein Schwerpunkt lag immer im weiten Feld der Digitalisierung, in letzter Zeit insbesondere im Bereich Internet of Things und Künstliche Intelligenz.
                </p>
                <p>
                  Ich leite interdisziplinäre Teams mit einem breiten Technologie-Stack und entwickle gemeinsam mit Kunden sowie internen Stakeholdern Lösungen, die sowohl <strong className="text-foreground">technisch machbar als auch wirtschaftlich sinnvoll</strong> sind.
                </p>
                <p>
                  Meine Erfahrung umfasst den Aufbau neuer Abteilungen, die Skalierung in Wachstumsphasen sowie das Führen durch herausfordernde Situationen. Die Zusammenarbeit mit Menschen aus unterschiedlichen fachlichen und persönlichen Hintergründen macht für mich den besonderen Reiz meiner Rolle aus.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">20<span className="text-primary">+</span></h4>
                <p className="text-muted-foreground font-medium">Jahre IT-Erfahrung</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">10<span className="text-primary">+</span></h4>
                <p className="text-muted-foreground font-medium">Jahre Führungserfahrung</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">3</h4>
                <p className="text-muted-foreground font-medium">Unternehmen geführt</p>
              </div>
              <div>
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 tracking-tight">IoT<span className="text-primary">&</span>KI</h4>
                <p className="text-muted-foreground font-medium">Technologie-Fokus</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
