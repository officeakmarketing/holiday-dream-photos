export default function FaqAccordionVar2() {
  const faqs = [
    {
      question: "Can I book both experiences?",
      answer: "Absolutely. Many families book both. Each session is separate and fully confirmed at the time of booking."
    },
    {
      question: "Which locations offer both experiences?",
      answer: "All 8 of our locations offer both the Traditional Santa and Black Santa experience. Select your location at checkout."
    },
    {
      question: "What is included in a session?",
      answer: "Package details and inclusions will be announced soon. [PLACEHOLDER: Package details — client providing next week]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-red">
      <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
          <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs mb-3 md:mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-4 md:mb-6 leading-tight">
            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" /> Questions
          </h2>
          <div className="w-12 h-[2px] bg-white"></div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full divide-y divide-white/20">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-6 sm:py-8 first:pt-0 last:pb-0">
                <summary className="flex w-full items-center justify-between font-heading text-xl sm:text-2xl md:text-3xl text-white cursor-pointer list-none hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-8 focus-visible:ring-offset-brand-red rounded-sm transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                  <span className="pr-6">{faq.question}</span>
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 text-white group-open:rotate-180 group-open:border-brand-dark group-open:bg-brand-dark group-open:text-white transition-all duration-300 shadow-sm group-hover:border-brand-dark">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="mt-4 sm:mt-6 pr-12 sm:pr-16">
                  <p className="text-white/90 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {faq.answer.includes("[PLACEHOLDER") ? (
                      <>Package details and inclusions will be announced soon.<span className="hidden">[PLACEHOLDER]</span></>
                    ) : faq.answer}
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
