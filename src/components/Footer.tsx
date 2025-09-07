const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">TicketBrain</h3>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Transforming grocery receipts into smart insights for conscious consumers.
          </p>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-primary-foreground/60">
            <span>© 2024 TicketBrain</span>
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