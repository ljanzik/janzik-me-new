import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-cv";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export function Contact() {
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: "", email: "", message: "" }
  });
  
  const mutation = useCreateMessage();
  const { toast } = useToast();

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({ 
          title: "Message received.", 
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      },
      onError: (err) => {
        toast({ 
          title: "Message failed", 
          description: err.message, 
          variant: "destructive" 
        });
      }
    });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] border border-white/10 p-8 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's start the <span className="text-primary">Reset.</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're facing a crisis, needing a strategic turnaround, or looking to embed AI into your operating model—I'm ready to help you execute.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Based In</span>
                  <span className="text-white font-medium text-lg">Hamburg & Germany-wide</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Availability</span>
                  <span className="text-primary font-medium text-lg">Available on Request</span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                  <input
                    id="name"
                    {...form.register("name")}
                    className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...form.register("message")}
                    className="w-full px-5 py-4 rounded-xl bg-background border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
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
