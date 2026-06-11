import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import Footer from "../Componants/Footer";

const Contact = () => {
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
            <span className="text-gray-600 font-semibold">Contact Us</span>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Contact Support
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Send us a direct message or find our regional corporate offices.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Inquiry Form (2 cols) */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-xs">
              <h2 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-4 mb-6">
                Send Us A Message
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="General Inquiry / Support Help"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Message Content</label>
                  <textarea
                    rows="6"
                    placeholder="Write details of your question here. Our support team responds in less than 24 hours."
                    className="w-full p-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Office Info card (1 col) */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-slate-800 text-base border-b border-gray-100 pb-3 mb-4">
                  Corporate HQ
                </h3>
                <div className="space-y-4 text-sm font-semibold text-slate-655">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#00aeff] mt-0.5 flex-shrink-0" />
                    <span>905 Brickell Bay Dr, Miami, FL 33131</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#00aeff] flex-shrink-0" />
                    <span>+1 (305) 555-0100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#00aeff] flex-shrink-0" />
                    <span>info@houzez.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-center">
                <HelpCircle size={32} className="text-[#00aeff] mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 text-sm mb-2">Need Immediate Help?</h4>
                <p className="text-xs text-gray-500 font-semibold mb-4 leading-relaxed">
                  Browse our frequently asked questions to find instant answers about bidding, listings, and payments.
                </p>
                <NavLink
                  to="/faq"
                  className="inline-block bg-[#00aeff] hover:bg-[#009ee6] text-white text-xs font-bold py-2 px-4 rounded transition-all active:scale-95 shadow-xs"
                >
                  Read FAQ
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
