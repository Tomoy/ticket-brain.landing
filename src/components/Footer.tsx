const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/f086913a-d575-4ca1-a25d-24c8cabedd92.png" 
              alt="TicketBrain Logo" 
              className="w-8 h-8"
            />
            <h3 className="text-2xl font-bold">TicketBrain</h3>
          </div>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Transforming grocery receipts into smart insights for conscious consumers.
          </p>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-primary-foreground/60">
            <span>© 2025 Ticket Brain</span>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;