import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="MacAppStudio" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">Services</a>
          <a href="#pizza" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">How it works</a>
          <a href="#use-cases" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">Use cases</a>
          <a href="#why" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">Why us</a>
        </nav>
        <Button size="sm" className="rounded-full">Get Proposal</Button>
      </div>
    </header>
  );
};

export default Navbar;
