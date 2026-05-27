import { motion } from "framer-motion";
import { Sparkles, Layers, Shield } from "lucide-react";

const features = [
  {
    title: "Clarity by design",
    description: "Every pixel serves a purpose. No unnecessary complexity, just the tools you need to do your best work.",
    icon: Sparkles,
  },
  {
    title: "Built to scale",
    description: "From your first draft to your final release, our architecture supports your journey without friction.",
    icon: Layers,
  },
  {
    title: "Quietly secure",
    description: "Enterprise-grade protection that runs silently in the background, keeping your ideas safe.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24 max-w-2xl">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6"
        >
          Everything you need.<br/> Nothing you don't.
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground"
        >
          We believe in software that gets out of your way. Our toolset is carefully curated to elevate your workflow, not complicate it.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            data-testid={`feature-card-${index}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
