import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, ShieldCheck } from "lucide-react";
import Footer from "../Componants/Footer";

const TermsPrivacy = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        {/* <KeywordSearch /> */}

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={16} />
              <span>Home</span>
            </NavLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-semibold">Terms & Privacy</span>
          </div>
        </div>

        {/* Terms details */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8 text-center">
            <ShieldCheck size={40} className="text-[#00aeff] mx-auto mb-3" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Terms & Privacy Policies
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Please read our operational guidelines and data protection terms carefully.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6 text-sm sm:text-base text-gray-650 leading-relaxed font-semibold">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-2">1. User Agreement & Service Terms</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                By accessing the Houzez real estate platform, you agree to comply with our listing policies. You must not list fraudulent property details, fake pricing, or mock ownership credentials. Submissions are subject to administrative review and instant removal upon violations.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-2">2. Privacy & Data Security Policies</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                We respect your personal privacy. When you send messages to agents, make mortgage estimates, or submit listing inquiries, we collect basic details (name, email address, phone number). This information is solely used to facilitate agent connectivity and is never sold to third-party marketing companies.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-2">3. Cookies & Local Storage</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                We use secure local sessions and cookie structures to remember user preferences, active location selections, and filters. This ensures a personalized and smooth browsing interface.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPrivacy;
