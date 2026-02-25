import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-cv";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  return (
    <section className="py-32 bg-background relative" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Expertise <span className="text-primary">& Skills</span></h2>
          <p className="text-xl text-muted-foreground">Das Fundament meiner Führung: Die Brücke zwischen Technologie und Unternehmenszielen.</p>
        </div>

        {isLoading ? (
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="w-48 h-14 bg-white/5 rounded-full animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {skills?.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-4 rounded-full border border-border bg-card hover:border-primary hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-default"
              >
                <span className="font-medium text-foreground/90">{skill.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary font-mono text-sm">{skill.proficiency}%</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
