import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-8 border border-border/50"
      >
        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
        Lumina 2.0 is now available
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6"
      >
        Focus on the work that <span className="text-primary italic font-serif">matters.</span>
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
      >
        A calm, composed environment for your most important ideas. Strip away the noise and build something extraordinary with Lumina.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
      >
        <Button size="lg" className="h-14 px-8 rounded-full text-base bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto group" data-testid="button-hero-primary">
          Start for free
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base bg-background w-full sm:w-auto" data-testid="button-hero-secondary">
          Book a demo
        </Button>
      </motion.div>
    </section>
  );
}
