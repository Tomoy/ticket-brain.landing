import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-5">
      <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-3">{t('privacy.title')}</h1>
          <p className="text-lg opacity-90">{t('privacy.lastUpdated')}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Who We Are */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4 first:mt-0">{t('privacy.whoWeAre.title')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('privacy.whoWeAre.content')}
          </p>

          {/* Information We Collect */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy.infoCollect.title')}</h2>
          <div className="text-muted-foreground mb-4 space-y-2">
            <p>{t('privacy.infoCollect.receipt')}</p>
            <p>{t('privacy.infoCollect.email')}</p>
            <p>{t('privacy.infoCollect.usage')}</p>
          </div>

          {/* How We Store and Protect Your Data */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy.howStore.title')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('privacy.howStore.content')}
          </p>

          {/* Your Rights Under GDPR */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy.gdprRights.title')}</h2>
          <div className="text-muted-foreground mb-4 space-y-2">
            <p>{t('privacy.gdprRights.access')}</p>
            <p>{t('privacy.gdprRights.rectification')}</p>
            <p>{t('privacy.gdprRights.erasure')}</p>
            <p>{t('privacy.gdprRights.portability')}</p>
            <p>{t('privacy.gdprRights.objection')}</p>
          </div>

          {/* Contact Us */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t('privacy.contact.title')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('privacy.contact.content')}
          </p>
          
          <div className="bg-muted/50 border border-border rounded-lg p-5 my-5">
            <p className="text-muted-foreground">
              {t('privacy.contact.email')}<br/>
              {t('privacy.contact.address')}
            </p>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {t('privacy.contact.authority')}
          </p>
        </div>

        {/* Footer */}
        <div className="bg-muted/30 border-t border-border px-8 py-6 text-center">
          <p className="text-muted-foreground mb-2">&copy; 2025 TicketBrain. All rights reserved.</p>
          <p className="text-muted-foreground">Based in Barcelona, Spain | Compliant with GDPR</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;