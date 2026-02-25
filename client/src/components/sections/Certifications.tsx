import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/cv";

export function Certifications() {
  return (
    <section className="py-24 bg-card border-y border-border" id="certifications">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-display font-bold mb-12 text-center">Zertifizierungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="text-primary w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{[cert.issuer, cert.date].filter(Boolean).join(" • ")}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
