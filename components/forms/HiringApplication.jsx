"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import FadeInItem from "../animations/FadeInItem";
import StaggerContainer from "../animations/StaggerContainer";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { locationsData } from "@/lib/locationsData";

export default function HiringApplication() {
  const [step, setStep] = useState("initial"); // 'initial' | 'locations' | 'form' | 'success'
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLocationSelect = (loc) => {
    setSelectedLocation(loc);
    setStep("form");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
    }, 1500);
  };

  return (
    <section className="w-full relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] py-16 md:py-24">
      
      {/* High-End CSS Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#050a08] overflow-hidden">
        {/* Central glowing radial spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1000px] aspect-square bg-[radial-gradient(circle_at_center,_rgba(17,49,34,0.8)_0%,_rgba(10,29,20,0.5)_40%,_rgba(5,10,8,1)_70%)] opacity-90 pointer-events-none" />
        {/* Ambient corner glows for depth */}
        <div className="absolute -top-[30%] -left-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(200,16,46,0.1)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwek0zOSAzOUgxVjFoMzh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* STEP 1: INITIAL CTA */}
        {step === "initial" && (
          <FadeIn className="text-center flex flex-col items-center">
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Join The Team
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-brand-light mb-8 leading-tight drop-shadow-xl max-w-2xl mx-auto">
              Think you have <br className="hidden md:block"/> what it takes?
            </h2>
            <button 
              disabled
              className="inline-flex items-center gap-3 bg-brand-red/50 text-white/70 px-8 py-5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-sm shadow-2xl border border-brand-red/50 cursor-not-allowed"
            >
              Applications Coming Soon
            </button>
            <p className="text-[10px] text-white/40 mt-8 uppercase tracking-[0.3em] font-light">
              Select your location to begin
            </p>
          </FadeIn>
        )}

        {/* STEP 2: LOCATION SELECTOR - LIGHT CARDS MATCHING SCREENSHOT */}
        {step === "locations" && (
          <div className="w-full">
            <div className="text-center mb-12">
              <button 
                onClick={() => setStep("initial")} 
                className="text-white/60 hover:text-white mb-6 flex items-center justify-center gap-2 mx-auto text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h2 className="font-heading text-3xl md:text-5xl text-brand-light">Select Your Location</h2>
              <div className="w-12 h-[2px] bg-brand-red mx-auto mt-6"></div>
            </div>
            
            <StaggerContainer 
              staggerChildren={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 2xl:gap-12"
            >
              {locationsData.map((loc, idx) => (
                <FadeInItem 
                  key={loc.id} 
                  className={`h-full lg:col-span-2 2xl:col-span-1 ${idx === 6 ? 'lg:col-start-2 2xl:col-start-auto' : ''}`}
                >
                  <div className="bg-[#fdfbf9] rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-brand-dark/10 hover:-translate-y-1">
                    
                    {/* Image Area - Identical to Locations page */}
                    <div className="h-48 md:h-56 bg-brand-light relative shrink-0 overflow-hidden cursor-pointer" onClick={() => handleLocationSelect(loc)}>
                      <Image 
                        src={loc.image} 
                        alt={`${loc.name} location`} 
                        fill 
                        sizes="(max-width: 1200px) 50vw, 33vw" 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Body Area - Identical to Locations page structure */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-transparent relative text-left">
                      
                      <div className="mb-4">
                        <span className="text-brand-red font-bold uppercase tracking-[0.1em] text-[10px] block mb-2">
                          {loc.city}
                        </span>
                        <h3 className="font-heading text-2xl text-brand-dark leading-tight group-hover:text-brand-red transition-colors duration-300">
                          {loc.name}
                        </h3>
                      </div>
                      
                      {/* Dummy Description */}
                      <div className="flex-1 mb-8">
                        <p className="text-brand-dark/70 text-xs md:text-sm leading-relaxed">
                          We are currently seeking passionate, high-energy individuals to bring the magic of Christmas to life at {loc.name}. Roles include Real Bearded Santas and dedicated Support Staff. Join our team and help create unhurried, magical memories for families this holiday season.
                        </p>
                      </div>
                      
                      {/* Actions */}
                      <div className="mt-auto">
                        <button 
                          onClick={() => handleLocationSelect(loc)}
                          className="w-full flex items-center justify-center bg-brand-red text-white hover:bg-brand-red/90 px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.1em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                          Apply Here
                        </button>
                      </div>
                    </div>

                  </div>
                </FadeInItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* STEP 3: APPLICATION FORM */}
        {step === "form" && selectedLocation && (
          <FadeIn className="w-full max-w-2xl mx-auto">
            
            <div className="text-center mb-10">
              <button 
                onClick={() => setStep("locations")} 
                className="text-white/60 hover:text-white mb-6 flex items-center justify-center gap-2 mx-auto text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Locations
              </button>
              <h2 className="font-heading text-3xl md:text-5xl text-brand-light">Apply for {selectedLocation.name}</h2>
              <p className="text-brand-light/50 text-sm mt-2 font-bold uppercase tracking-widest">{selectedLocation.city}</p>
              <div className="w-12 h-[2px] bg-brand-red mx-auto mt-6"></div>
            </div>

            <div className="bg-[#0a110a]/90 backdrop-blur-md shadow-2xl rounded-sm border border-white/10 overflow-hidden p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Full Name *</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 p-3.5 text-brand-light focus:ring-0 focus:border-brand-red transition-colors rounded-sm" placeholder="John Doe" />
                </div>
                
                <div>
                  <label className="block text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Email Address *</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 p-3.5 text-brand-light focus:ring-0 focus:border-brand-red transition-colors rounded-sm" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 p-3.5 text-brand-light focus:ring-0 focus:border-brand-red transition-colors rounded-sm" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="block text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Role Applying For *</label>
                  <select required defaultValue="" className="w-full bg-white/5 border border-white/10 p-3.5 text-brand-light focus:ring-0 focus:border-brand-red transition-colors rounded-sm appearance-none">
                    <option value="" disabled className="text-brand-dark">Select a role...</option>
                    <option value="santa" className="text-brand-dark">Santa (Real Beard Required)</option>
                    <option value="support" className="text-brand-dark">Support Staff</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-4.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </FadeIn>
        )}

        {/* STEP 4: SUCCESS */}
        {step === "success" && (
          <FadeIn className="text-center bg-[#0a110a]/90 backdrop-blur-md border border-white/10 p-12 max-w-lg mx-auto shadow-2xl rounded-sm">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl text-brand-light mb-4">Application Received!</h2>
            <p className="text-brand-light/70 mb-10 leading-relaxed font-light text-sm">
              Thank you for applying for the {selectedLocation?.name} team. We will review your application and be in touch soon.
            </p>
            <button 
              onClick={() => {setStep("initial"); setSelectedLocation(null);}}
              className="bg-brand-red text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-colors rounded-sm"
            >
              Back to Start
            </button>
          </FadeIn>
        )}

      </div>
    </section>
  );
}
