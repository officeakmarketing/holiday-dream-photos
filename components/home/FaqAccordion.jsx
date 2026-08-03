"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

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
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-brand-dark/10 last:border-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
          >
            <h4 className="font-heading text-2xl md:text-3xl text-brand-dark pr-8 group-hover:text-brand-red transition-colors">
              {faq.question}
            </h4>
            <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'border-brand-red bg-brand-red text-white' : 'border-brand-dark/20 text-brand-dark group-hover:border-brand-red group-hover:text-brand-red'}`}>
              {openIndex === index ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-brand-dark/70 leading-relaxed font-light text-base md:text-lg">
                  {faq.answer.includes("[PLACEHOLDER") ? (
                    <>
                      Package details and inclusions will be announced soon.
                      <span className="hidden">[PLACEHOLDER: Package details — client providing next week]</span>
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
