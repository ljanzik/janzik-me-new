import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl tracking-tight text-white">
          VOIGT<span className="text-primary">.AG</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Skills</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/5 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-white">About</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-white">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-white">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="px-4 py-2 text-muted-foreground hover:text-white">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 text-primary font-semibold">Let's Talk</a>
        </div>
      )}
    </header>
  );
}
