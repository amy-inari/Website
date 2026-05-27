import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card py-16 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex" data-testid="link-footer-home">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background" />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight">Lumina</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              Design systems and tools for the quiet professionals. Building a better web, one pixel at a time.
            </p>
          </div>
          <div className="mt-12 text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Lumina Inc. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <h4 className="font-semibold text-foreground mb-2">Product</h4>
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-features">Features</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pricing">Pricing</Link>
          <Link href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-changelog">Changelog</Link>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <h4 className="font-semibold text-foreground mb-2">Company</h4>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">About Us</Link>
          <Link href="#careers" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">Careers</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
