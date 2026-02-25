import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      toast({
        title: "Nachricht erhalten.",
        description: "Ich werde mich so schnell wie möglich bei Ihnen melden.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Senden fehlgeschlagen",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] border border-border p-8 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Lassen Sie uns <span className="text-primary">starten.</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ob es um digitale Transformation, strategische IT-Führung oder den Aufbau moderner Organisationen geht – ich freue mich auf den Austausch.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Standort</span>
                  <span className="text-foreground font-medium text-lg">NRW & deutschlandweit</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Verfügbarkeit</span>
                  <span className="text-primary font-medium text-lg">Auf Anfrage</span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Ihr Name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="name@beispiel.de"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Wie kann ich Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sendet...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Nachricht senden</>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
