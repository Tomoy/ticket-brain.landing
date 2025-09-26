import { Brain, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { analytics, logEvent } from "../../firebase-config";

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <div className="flex items-center justify-center w-10 h-10">
              <img src="/lovable-uploads/logo-medium-light.png" alt="TicketBrain Logo" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold">
              <span style={{ color: '#124434' }}>Ticket</span>
              <span className="text-foreground">Brain</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => {
                //Firebase event logging
                logEvent(analytics, 'header_how_it_works_tap', {
                  button_name: 'howItWorks',
                  page_location: window.location.pathname
                })
                scrollToSection('how-it-works')
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.howItWorks')}
            </button>
            <button 
                onClick={() => {
                  //Firebase event logging
                  logEvent(analytics, 'header_features_tap', {
                    button_name: 'features',
                    page_location: window.location.pathname
                  })
                  scrollToSection('features')
                }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <Link 
              to="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => {
              //Firebase event logging
              logEvent(analytics, 'header_blog_tap', {
                button_name: 'blog',
                page_location: window.location.pathname
              });
              }}
            >
              Blog
            </Link>
            <Link 
              to="/frequently-asked-questions"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => {
              //Firebase event logging
              logEvent(analytics, 'header_faq_tap', {
                button_name: 'faq',
                page_location: window.location.pathname
              });
              }}
            >
              FAQ
            </Link>
            <button 
                onClick={() => {
                  //Firebase event logging
                  logEvent(analytics, 'header_join_us_tap', {
                    button_name: 'joinUs',
                    page_location: window.location.pathname
                  })
                  scrollToSection('contact')
                }}
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
                <Link 
                  to="/blog"
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/frequently-asked-questions"
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
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