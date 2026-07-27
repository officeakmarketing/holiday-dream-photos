import Link from "next/link";
import SnowAnimation from "@/components/animations/SnowAnimation";

export default function Footer() {
  return (
    <footer className="w-full bg-[#113122] pt-24 lg:pt-32 pb-12 relative overflow-hidden">
      <SnowAnimation />
      
      {/* Decorative Wreath - Faded into the background for a subtle luxury feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-25 pointer-events-none mix-blend-screen transform translate-x-1/3 -translate-y-1/4">
        <img
          src="/images/hero_wreath.png"
          alt="Decorative Holiday Wreath"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 isolate">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Vision (Takes up 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-bodoni text-4xl lg:text-5xl text-[#F9F7F4] mb-6 tracking-tight">
              Holiday Dream <br/> <span className="italic text-brand-red font-light">Photos</span>
            </h2>
            <p className="text-[#F9F7F4]/60 font-light leading-relaxed max-w-sm mb-8 text-sm md:text-base">
              Creating unhurried, magical holiday memories through premium, authentic Santa photo experiences designed to last a lifetime.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-brand-red hover:text-brand-red transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-brand-red hover:text-brand-red transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-8">Experiences</h4>
            <div className="flex flex-col gap-4">
              <Link href="/our-santas" className="text-[#F9F7F4]/60 hover:text-white transition-colors text-sm font-light">Traditional Santa</Link>
              <Link href="/black-santa" className="text-[#F9F7F4]/60 hover:text-white transition-colors text-sm font-light">Black Santa</Link>
              <Link href="/private-events" className="text-[#F9F7F4]/60 hover:text-white transition-colors text-sm font-light">Private Events</Link>
              <Link href="/locations" className="text-[#F9F7F4]/60 hover:text-white transition-colors text-sm font-light">Locations & Booking</Link>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white uppercase tracking-[0.2em] text-xs font-semibold mb-8">Stay in the Magic</h4>
            <p className="text-[#F9F7F4]/60 font-light text-sm mb-8 max-w-xs leading-relaxed">
              Join Santa&apos;s mailing list for exclusive early booking access and holiday updates.
            </p>
            <form className="flex w-full max-w-sm relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 w-full outline-none text-[#F9F7F4] placeholder-white/40 text-sm font-light px-6 py-4 rounded-full border border-white/10 focus:border-brand-red transition-colors"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-brand-red text-white px-6 rounded-full uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-brand-red transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/40 text-xs font-light">
            &copy; {new Date().getFullYear()} Holiday Dream Photos. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-xs font-light">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-xs font-light">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
