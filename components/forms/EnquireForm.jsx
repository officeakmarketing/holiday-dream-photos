"use client";

import { useState } from "react";

export default function EnquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted. Future: connect to email backend.");
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="py-12 border-t border-b border-gray-200">
        <p className="font-heading text-3xl text-brand-dark mb-4">Thank You</p>
        <p className="text-gray-500 font-light text-base">Your enquiry has been received. Our team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="relative group">
          <input required type="text" id="name" className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors placeholder-transparent" placeholder="Name" />
          <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-400 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-dark">Name</label>
        </div>
        <div className="relative group">
          <input required type="email" id="email" className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors placeholder-transparent" placeholder="Email" />
          <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-400 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-dark">Email</label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="relative group">
          <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors placeholder-transparent" placeholder="Phone" />
          <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-400 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-dark">Phone</label>
        </div>
        <div className="relative">
          <label className="block text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">Event Type</label>
          <select required defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors">
            <option value="" disabled>Select an option</option>
            <option>Corporate Party</option>
            <option>Private Party</option>
            <option>Community Event</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <label className="block text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">Preferred Date</label>
        <input required type="date" className="w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors" />
      </div>

      <div className="relative group pt-4">
        <textarea required id="message" rows="4" className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
        <label htmlFor="message" className="absolute left-0 top-0 text-xs text-gray-400 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-dark">Tell us about your event</label>
      </div>

      <button disabled={loading} type="submit" className="w-full px-8 py-5 bg-brand-dark text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all disabled:opacity-70 mt-4">
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
