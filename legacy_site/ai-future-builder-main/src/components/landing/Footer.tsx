import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-14 md:px-8">
        <p className="mx-auto max-w-2xl text-center text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          AI is not a trend. <span className="text-gradient-brand">It's a shift.</span>
        </p>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <img src={logo} alt="MacAppStudio" className="h-7 w-auto" />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="transition-smooth hover:text-foreground">Services</a>
            <a href="#use-cases" className="transition-smooth hover:text-foreground">Use cases</a>
            <a href="#why" className="transition-smooth hover:text-foreground">Why us</a>
            <a href="#cta" className="transition-smooth hover:text-foreground">Contact</a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MacAppStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
