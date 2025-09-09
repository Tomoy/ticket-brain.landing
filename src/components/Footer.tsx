import { Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="flex items-center justify-center w-8 h-8">
              <img src="/lovable-uploads/e56db21d-6556-4398-ada1-4e498b4d15ce.png" alt="TicketBrain Logo" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">TicketBrain</h3>
          </div>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            {t('footer.description')}
          </p>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-primary-foreground/60">
            <span>© 2025 Ticket Brain</span>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">
              {t('footer.privacyPolicy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;