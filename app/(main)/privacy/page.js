import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Privacy Policy | Holiday Dream Photos',
  description: 'Privacy Policy for Holiday Dream Photos. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto pt-32 lg:pt-40 mb-20 lg:mb-32">
        
        <div className="mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.2] tracking-tight mb-6">
            Privacy <span className="text-brand-red italic">Policy</span>
          </h1>
          <p className="text-brand-dark/60 uppercase tracking-[0.2em] text-xs font-bold">
            Last updated: September 2026
          </p>
        </div>

        <div className="w-full border-t border-brand-dark/10 pt-12 space-y-12">
          
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">1. Who we are</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Holiday Dream Photos is operated by Holiday Dream Photos LLC. Our website is holidaydreamphotos.com. When you book a session or contact us, we collect and process certain personal information. This policy explains what we collect, how we use it, and your rights.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">2. What information we collect</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              When you book a session we collect your name, email address, phone number, and payment information. When you visit our website we collect standard analytics data including pages visited, time on site, and device type. If you contact us directly we collect the information you provide in your message.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">3. How we use your information</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              We use your information to process and confirm your booking, send you session reminders and your photo delivery link, respond to your enquiries, improve our service and website experience, and send you relevant updates about Holiday Dream Photos if you have opted in to marketing communications.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">4. Payment information</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              All payments are processed securely through our booking platform. We do not store your card details on our servers. Payment processing is handled by a PCI-compliant third-party provider.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">5. Sharing your information</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              We do not sell your personal information to third parties under any circumstances. We may share your information with trusted service providers who help us operate our booking system, deliver your photos, and send communications. All third-party providers are bound by confidentiality agreements. We will disclose information if required by law or valid legal process.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">6. Children's privacy — COPPA compliance</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Holiday Dream Photos provides photography services for families including children. We are committed to protecting the privacy of children in accordance with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information directly from children under the age of 13. All booking information is collected from the parent or guardian completing the booking. If we become aware that we have inadvertently collected personal information from a child under 13 without verifiable parental consent we will delete that information promptly. Parents or guardians who believe their child's information has been collected without consent should contact us immediately at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">7. Photography and image rights</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              By booking a session you acknowledge that professional photographs are taken during your visit for your personal use. Your photos are delivered to you privately and remain yours. Holiday Dream Photos will not use photographs of you or your children for any marketing, promotional, or commercial purpose without your explicit written consent obtained separately at the time of your session. You are under no obligation to provide this consent and refusal will not affect your session or your photo delivery in any way.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">8. California residents — CCPA rights</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              If you are a California resident you have the right to know what personal information we collect about you and how it is used, request deletion of your personal information, opt out of the sale of your personal information (we do not sell personal information), and not be discriminated against for exercising your privacy rights. To exercise any of these rights please contact us at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">9. Data retention</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              We retain your booking information for up to 24 months for record-keeping and customer support purposes. You may request deletion of your personal data at any time by contacting us and we will action your request within 30 days.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">10. Your rights</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              You have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your data, and opt out of marketing communications at any time by clicking unsubscribe in any email we send or by contacting us directly.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">11. Cookies</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Our website uses cookies to improve your browsing experience and collect analytics data. You can adjust your browser settings to refuse cookies although some features of the site may not function correctly as a result. We do not use cookies to collect personal information without your knowledge.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">12. Changes to this policy</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              We may update this privacy policy from time to time. The current version is always available on our website. We will notify you of significant changes by email if you have an active booking or account with us.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">13. Contact</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              For any privacy-related questions or to exercise your rights please contact us at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a> or call <span className="font-bold text-brand-dark">678-325-1232</span>.
            </p>
          </div>

        </div>
      </section>

      <FinalCTA 
        headline="Come and experience the magic for yourself."
        body="Reserve your spot today. Sessions fill up quickly."
        ctaText="Book Your Session Now"
      />
    </div>
  );
}
