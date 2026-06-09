import React, { useEffect, useState } from "react";

export default function ErrorPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F1F2E] overflow-hidden flex flex-col items-center justify-center px-6">

      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C] opacity-[0.05] blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 14L14 4L24 14V25H18V18H10V25H4V14Z" fill="#C9A84C" />
          </svg>
          <span
            className="text-[#F5F0E8] text-xl font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
          >
            Houzez
          </span>
        </div>
        <span className="text-[#4A6174] text-sm tracking-widest uppercase font-light">
          Premium Real Estate
        </span>
      </header>

      {/* Main content */}
      <main
        className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >

        {/* 404 architectural number */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter text-transparent"
            style={{
              fontFamily: "'Playfair Display', serif",
              WebkitTextStroke: "1.5px #C9A84C",
              textShadow: "0 0 80px rgba(201,168,76,0.12)",
            }}
          >
            404
          </span>

          {/* Blueprint corner marks */}
          {[
            "top-0 left-0 border-t-2 border-l-2",
            "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2",
            "bottom-0 right-0 border-b-2 border-r-2",
          ].map((cls, i) => (
            <span
              key={i}
              className={`absolute w-4 h-4 border-[#C9A84C] opacity-60 ${cls}`}
            />
          ))}

          {/* Measurement lines */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-40">
            <div className="w-16 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-mono tracking-widest">UNIT NOT FOUND</span>
            <div className="w-16 h-px bg-[#C9A84C]" />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-8 mb-8">
          <div className="w-12 h-px bg-[#4A6174]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          <div className="w-12 h-px bg-[#4A6174]" />
        </div>

        {/* Headline */}
        <h1
          className="text-[#F5F0E8] text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          This Property Has Left the Market
        </h1>

        {/* Subtext */}
        <p className="text-[#4A6174] text-base md:text-lg max-w-md leading-relaxed mb-10 font-light">
          The listing you're looking for may have been sold, removed, or the address may have changed.
          Let us help you find your perfect home.
        </p>

        {/* Info card */}
        <div className="bg-[#0a1822] border border-[#1e3448] rounded-xl px-6 py-5 mb-10 flex gap-6 text-left max-w-sm w-full">
          {[
            { icon: "🏠", label: "Active Listings", value: "2,400+" },
            { icon: "📍", label: "Locations", value: "180 Cities" },
            { icon: "⭐", label: "Happy Clients", value: "98% Rate" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex-1 flex flex-col items-center text-center">
              <span className="text-xl mb-1">{icon}</span>
              <span className="text-[#C9A84C] text-sm font-semibold">{value}</span>
              <span className="text-[#4A6174] text-xs mt-0.5">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/"
            className="group inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963e] text-[#0F1F2E] font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm tracking-wide uppercase"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </a>

          <a
            href="/listings"
            className="group inline-flex items-center gap-2 border border-[#1e3448] hover:border-[#C9A84C] text-[#F5F0E8] hover:text-[#C9A84C] font-medium px-8 py-3.5 rounded-lg transition-all duration-200 text-sm tracking-wide uppercase"
          >
            Browse Listings
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-[#2e4a62] text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Houzez · All Rights Reserved
      </footer>
    </div>
  );
}