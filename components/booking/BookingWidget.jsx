"use client";

import React from "react";
import Lottie from "lottie-react";

const BookingWidget = React.memo(function BookingWidget() {
  return (
    <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(17,49,34,0.15)] border border-brand-dark/5 overflow-hidden w-full group min-h-[400px] md:min-h-[450px] flex flex-col mb-8">
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red z-20"></div>

   
      {/* Acuity Widget Premium Skeleton Placeholder */}
      <div className="flex-1 flex flex-col p-8 md:p-12 text-left w-full bg-gradient-to-b from-brand-red/5 to-brand-light/30 relative z-20">
        
        <div className="flex flex-col md:flex-row gap-12 w-full h-full max-w-5xl mx-auto">
          {/* Left: Calendar Skeleton */}
          <div className="flex-1">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-dark mb-2">Select a Date</h3>
            <p className="text-sm text-brand-dark/50 mb-8 font-light">Choose your preferred session day.</p>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-dark/5">
              <div className="flex justify-between items-center mb-6">
                <div className="w-32 h-4 bg-brand-dark/10 rounded-full animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-dark/5 animate-pulse"></div>
                  <div className="w-8 h-8 rounded-full bg-brand-dark/5 animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[...Array(7)].map((_, i) => (
                  <div key={`day-${i}`} className="w-full h-3 bg-brand-dark/5 rounded-full animate-pulse"></div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(31)].map((_, i) => (
                  <div key={`date-${i}`} className={`w-full aspect-square rounded-full flex items-center justify-center ${i === 14 ? 'bg-brand-red/20' : 'bg-brand-dark/5'} animate-pulse`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Time Slots Skeleton */}
          <div className="w-full md:w-[350px]">
             <h3 className="font-heading text-2xl md:text-3xl text-brand-dark mb-2">Select a Time</h3>
             <p className="text-sm text-brand-dark/50 mb-8 font-light">Available slots for selected date.</p>
             
             <div className="space-y-3">
               {[...Array(5)].map((_, i) => (
                 <div key={`slot-${i}`} className={`w-full h-14 rounded-xl border flex items-center justify-center ${i === 1 ? 'border-brand-red border-2' : 'border-brand-dark/10 bg-white'} shadow-sm animate-pulse`}>
                   <div className={`w-24 h-4 rounded-full ${i === 1 ? 'bg-brand-red/40' : 'bg-brand-dark/10'}`}></div>
                 </div>
               ))}
             </div>

             <div className="mt-8 pt-8 border-t border-brand-dark/10">
               <div className="w-full h-12 bg-brand-dark/10 rounded-lg animate-pulse mb-4"></div>
               <p className="text-[10px] text-center text-brand-dark/40 uppercase tracking-widest">Acuity Integration Placeholder</p>
             </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
});

export default BookingWidget;
