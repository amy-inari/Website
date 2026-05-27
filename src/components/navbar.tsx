import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-3 h-3 rounded-full bg-background" />
        </div>
        <span className="font-display font-semibold text-lg tracking-tight">Lumina</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">Features</Link>
        <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">About</Link>
        <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-pricing">Pricing</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden sm:flex text-sm font-medium" data-testid="button-login">
          Log in
        </Button>
        <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-signup">
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
}
