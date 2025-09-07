import { Brain, Receipt } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              {/* Receipt background */}
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-success">
                <Receipt className="w-4 h-4 text-white" />
              </div>
              {/* Brain overlay */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center shadow-sm">
                <Brain className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary">Ticket</span>
              <span className="text-foreground">Brain</span>
            </span>
          </div>
          
          {/* Navigation - can be expanded later */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;