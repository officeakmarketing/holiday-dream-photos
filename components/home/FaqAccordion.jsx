export default function FaqAccordion() {
  const faqs = [
    {
      question: "How long does a session take?",
      answer: "Sessions are unhurried by design. Most families are in and out in 20 to 30 minutes but we never rush you. Your slot is yours for the full duration."
    },
    {
      question: "How do I receive my photos?",
      answer: "Your photos are delivered digitally to the email address you provide at booking within 48 hours of your session. Print-ready resolution included. No chasing required."
    },
    {
      question: "What is included in a session?",
      answer: "Each session includes professional photography with premium lighting and equipment, your choice of Traditional or Black Santa experience, and digital delivery of your photos within 48 hours at print-ready resolution. Full package details and pricing are available at your chosen location."
    },
    {
      question: "Which locations offer both experiences?",
      answer: "Most locations offer both Traditional Santa and Black Santa experiences. Almeda Mall, Omaha Mall, and Clearview Mall currently feature one experience only. Check your nearest location on the Locations page for the full breakdown."
    },
    {
      question: "What if my child is nervous or needs extra time?",
      answer: "We are experienced with children of all ages and temperaments. If your little one needs a moment, we take a moment. Our Santas are professionals who know how to put children at ease. There is no rush and no pressure."
    },
    {
      question: "Do you offer sessions for children with sensory sensitivities?",
      answer: "Yes. We offer Sweet Moments sessions designed for children who need a quieter, lower-stimulation environment. These run at specific times at select locations. Contact us directly to book."
    },
    {
      question: "Can we bring props or wear matching outfits?",
      answer: "Absolutely. Matching pyjamas, Christmas sweaters, family colours, bring whatever makes the moment feel like yours. The more personal the better."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Sessions cancelled more than 48 hours before your booking receive a full refund. Within 48 hours sessions are non-refundable but may be rescheduled subject to availability. Contact us as soon as possible if plans change."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EBE5D9]">
      <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
          <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-3 md:mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-brand-dark mb-4 md:mb-6 leading-tight">
            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" /> Questions
          </h2>
          <div className="w-12 h-[2px] bg-brand-red"></div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full divide-y divide-brand-dark/10">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-6 sm:py-8 first:pt-0 last:pb-0">
                <summary className="flex w-full items-center justify-between font-heading text-xl sm:text-2xl md:text-3xl text-brand-dark cursor-pointer list-none hover:text-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-8 rounded-sm transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                  <span className="pr-6">{faq.question}</span>
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand-dark/20 text-brand-dark group-open:rotate-180 group-open:border-brand-red group-open:bg-brand-red group-open:text-white transition-all duration-300 shadow-sm group-hover:border-brand-red">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="mt-4 sm:mt-6 pr-12 sm:pr-16">
                  <p className="text-brand-dark/70 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
