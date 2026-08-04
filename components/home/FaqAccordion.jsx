export default function FaqAccordion() {
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
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Sticky Left Column */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
          <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-brand-dark mb-6 leading-tight">
            Frequently <br className="hidden lg:block"/> Asked <br className="hidden lg:block"/> Questions
          </h2>
          <div className="w-12 h-[2px] bg-brand-red"></div>
        </div>

        {/* Right Column: Flowing Text (No Accordions) */}
        <div className="w-full lg:w-2/3 space-y-16">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <h3 className="font-heading text-3xl md:text-4xl text-brand-dark mb-6 group-hover:text-brand-red transition-colors duration-500">
                {faq.question}
              </h3>
              <p className="text-brand-dark/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl">
                {faq.answer.includes("[PLACEHOLDER") ? (
                  <>
                    Package details and inclusions will be announced soon.
                    <span className="hidden">[PLACEHOLDER: Package details — client providing next week]</span>
                  </>
                ) : (
                  faq.answer
                )}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
