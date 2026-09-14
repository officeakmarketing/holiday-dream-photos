"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { locationsData } from "@/lib/locationsData";
import { MapPin, ChevronRight, Calendar, ArrowLeft } from "lucide-react";

function BookingWidgetInner() {
  const searchParams = useSearchParams();
  const locationId = searchParams.get("locationId");
  const [isIframeLoading, setIsIframeLoading] = React.useState(true);

  // Find the selected location from our data
  const selectedLocation = locationsData.find(loc => loc.acuityCalendarId === locationId);

  // Construct the correct Acuity URL based on whether a specific location was clicked
  const acuityUrl = selectedLocation
    ? `https://holidaydreamphotos.as.me/?calendarID=${selectedLocation.acuityCalendarId}`
    : `https://holidaydreamphotos.as.me/`;

  // Native Location Selector if no location is chosen
  if (!locationId) {
    return (
      <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(17,49,34,0.15)] border border-brand-dark/5 overflow-hidden w-full mb-8">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red z-20"></div>
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-dark mb-3">Select Your Location</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto">Choose the mall nearest you to view available dates and book your magical Holiday Dream Photos session.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locationsData.map((loc) => (
              <Link 
                key={loc.id}
                href={`?locationId=${loc.acuityCalendarId}#booking-section`}
                className="group flex flex-col rounded-2xl bg-white border border-brand-dark/10 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Location Image */}
                <div className="relative w-full h-48 overflow-hidden bg-brand-light">
                  <Image 
                    src={loc.image}
                    alt={loc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Floating City Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-brand-dark flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    {loc.city}
                  </div>
                </div>

                {/* Content Layer (White Background for Perfect Clarity) */}
                <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
                  
                  <h3 className="font-heading text-xl sm:text-2xl text-brand-dark mb-2 pr-10 leading-tight group-hover:text-brand-red transition-colors duration-300">
                    {loc.name}
                  </h3>
                  <p className="text-brand-dark/60 text-sm font-medium leading-relaxed">
                    {loc.address}
                  </p>
                  
                  {/* Action Button */}
                  <div className="absolute right-6 top-6 w-10 h-10 rounded-full bg-brand-light group-hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <ChevronRight className="w-5 h-5 text-brand-dark/40 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(17,49,34,0.15)] border border-brand-dark/5 overflow-hidden w-full min-h-[600px] flex flex-col mb-8">
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red z-20"></div>
   
      {/* Dynamic Title if a specific location is selected */}
      {selectedLocation && (
        <div className="pt-6 sm:pt-8 px-6 sm:px-10 pb-4 border-b border-brand-dark/5 flex flex-col items-center text-center bg-brand-light/20 relative z-10">
          
          {/* Back Button */}
          <Link 
            href="/book-now#booking-section"
            className="absolute left-4 sm:left-10 top-6 sm:top-8 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-dark/50 hover:text-brand-red transition-colors bg-white sm:bg-transparent px-3 sm:px-0 py-2 sm:py-0 rounded-full sm:rounded-none border sm:border-0 border-brand-dark/10 shadow-sm sm:shadow-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden md:inline">Change Location</span>
            <span className="inline md:hidden">Back</span>
          </Link>

          <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mb-3 mt-12 sm:mt-0">
            <MapPin className="w-5 h-5 text-brand-red" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl text-brand-dark mb-1">
            Booking at <span className="text-brand-red">{selectedLocation.name}</span>
          </h2>
          <p className="text-sm text-brand-dark/60 font-medium">{selectedLocation.address}</p>
        </div>
      )}

      {/* Acuity Iframe */}
      <div className="flex-1 w-full bg-white relative z-10 p-2 sm:p-4 min-h-[600px]">
        
        {/* Themed Loading State */}
        {isIframeLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white">
            <div className="relative w-16 h-16 flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-brand-red/10"></div>
              <div className="absolute inset-0 rounded-full border-4 border-brand-red border-t-transparent animate-spin"></div>
            </div>
            <p className="font-heading text-xl text-brand-dark animate-pulse">Loading Booking System...</p>
          </div>
        )}

        <iframe
          src={acuityUrl}
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
          className={`w-full h-full min-h-[600px] transition-opacity duration-500 ${isIframeLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsIframeLoading(false)}
        ></iframe>
        <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" />
      </div>
      
    </div>
  );
}

const BookingWidget = React.memo(function BookingWidget() {
  return (
    <Suspense fallback={
      <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(17,49,34,0.15)] border border-brand-dark/5 overflow-hidden w-full min-h-[600px] flex items-center justify-center mb-8">
        <div className="w-10 h-10 border-4 border-brand-red/20 border-t-brand-red rounded-full animate-spin"></div>
      </div>
    }>
      <BookingWidgetInner />
    </Suspense>
  );
});

export default BookingWidget;
