import { Brain, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center justify-center w-10 h-10">
              <img src="/lovable-uploads/logo-medium-light.png" alt="TicketBrain Logo" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold">
              <span style={{ color: '#124434' }}>Ticket</span>
              <span className="text-foreground">Brain</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.howItWorks')}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.join')}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-foreground">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.howItWorks')}
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.features')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.join')}
                </button>
                <div className="pt-4 border-t border-border">
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;