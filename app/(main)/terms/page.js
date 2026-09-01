import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Terms of Service | Holiday Dream Photos',
  description: 'Terms of Service for Holiday Dream Photos. Please read these terms carefully before booking your session.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto pt-32 lg:pt-40 mb-20 lg:mb-32">
        
        <div className="mb-16">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.2] tracking-tight mb-6">
            Terms of <span className="text-brand-red italic">Service</span>
          </h1>
          <p className="text-brand-dark/60 uppercase tracking-[0.2em] text-xs font-bold">
            Last updated: September 2026
          </p>
        </div>

        <div className="w-full border-t border-brand-dark/10 pt-12 space-y-12">
          
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">1. Acceptance of terms</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              By booking a session with Holiday Dream Photos you agree to these terms in full. Please read them carefully before completing your booking. If you do not agree to these terms do not proceed with your booking.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">2. Booking and confirmation</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              All bookings are made online through our secure booking system. Your session is confirmed at the time of payment. You will receive a confirmation email with your session details immediately after booking. Please review your confirmation carefully and contact us within 24 hours if any details are incorrect.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">3. Pricing and payment</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Session pricing is as displayed at the time of booking. All prices are in USD. Payment is required in full at the time of booking to secure your slot. We accept major credit and debit cards through our secure third-party payment processor. Prices are subject to change but any change will not affect bookings already confirmed.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">4. Cancellations and refunds</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Sessions cancelled more than 48 hours before your scheduled time are eligible for a full refund to the original payment method, processed within 5 to 10 business days. Sessions cancelled within 48 hours of your scheduled time are non-refundable. If you need to reschedule please contact us as early as possible and we will do our best to accommodate you subject to availability at your chosen location. Holiday Dream Photos reserves the right to cancel or reschedule sessions due to circumstances outside our reasonable control including severe weather, venue closure, or staffing emergencies. In such cases a full refund or alternative slot will be offered at your discretion.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">5. Arriving for your session</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Please arrive 5 to 10 minutes before your scheduled session time. Late arrivals may result in a shortened session out of respect for families booked immediately after you. If you are running significantly late please call us at 678-325-1232 as soon as possible. Holiday Dream Photos is not responsible for missed sessions due to late arrival and no refund will be issued.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">6. Personal photography and recording policy</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Personal photography, video recording, and live streaming are strictly prohibited during sessions. This policy exists to protect the quality of your professional photographs, maintain the integrity of the experience for all families, and respect the privacy of other guests. Violation of this policy may result in the immediate termination of your session without refund. Professional photographs will be delivered digitally within 48 hours of your session.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">7. Photo delivery</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Your photos will be delivered to the email address provided at booking within 48 hours of your session. If you have not received your photos within 72 hours please contact us immediately at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a>. Photos are delivered at print-ready resolution. Holiday Dream Photos is not responsible for non-delivery caused by an incorrect email address provided at booking. It is your responsibility to ensure your email address is entered correctly at the time of booking.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">8. Image and likeness rights</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              By booking a session you acknowledge that professional photographs are taken for your personal use. Holiday Dream Photos will not use images of you or your children for any marketing, advertising, or commercial purpose without your separate explicit written consent obtained at the time of your session. Consent is entirely voluntary. No consent is implied by your booking or attendance. If you have previously provided consent and wish to withdraw it please contact us at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">9. Children's sessions and parental responsibility</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              All bookings involving children must be made by a parent or legal guardian aged 18 or over. The parent or guardian accompanying the child is responsible for the child's behaviour and safety during the session. Holiday Dream Photos staff are not responsible for supervising children outside of the photographic session itself.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">10. Behaviour and safety</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Holiday Dream Photos is committed to providing a safe and welcoming environment for all families and staff. We reserve the right to refuse service or terminate a session without refund if behaviour is threatening, aggressive, abusive, or disruptive to other guests or staff. The safety and comfort of our team, our Santas, and all families is our absolute priority.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">11. Limitation of liability</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              Holiday Dream Photos is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services or your attendance at any of our locations. Our maximum liability to you in connection with any booking is limited to the amount you paid for that session. Nothing in these terms excludes liability for death or personal injury caused by our negligence.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">12. Indemnification</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              You agree to indemnify and hold Holiday Dream Photos, its officers, staff, and contractors harmless from any claims, damages, or expenses arising from your violation of these terms or your conduct during a session.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">13. Governing law</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              These terms are governed by the laws of the State of Georgia, USA. Any disputes arising from these terms or your use of our services will be resolved exclusively in the courts of the State of Georgia.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">14. Changes to these terms</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              We may update these terms from time to time. The current version is always displayed on our website with the date of last update. Your continued use of our services after any update constitutes acceptance of the revised terms.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-dark">15. Contact</h2>
            <p className="text-brand-dark/80 text-base md:text-lg font-light leading-[1.8]">
              For any questions about these terms please contact us at <a href="mailto:Info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">Info@holidaydreamphotos.com</a> or call <span className="font-bold text-brand-dark">678-325-1232</span>.
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
