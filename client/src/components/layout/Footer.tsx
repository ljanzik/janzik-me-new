import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight text-foreground mb-2">
            LEIF JANZIK
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Leif Janzik. Alle Rechte vorbehalten.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
