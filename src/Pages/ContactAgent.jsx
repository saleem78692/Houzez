import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import Footer from "../Componants/Footer";

const agentsContactList = [
  {
    name: "Samuel Palmer",
    role: "Senior Sales Associate",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+1 (305) 555-0199",
    email: "samuel@houzez.com"
  },
  {
    name: "Michelle Ramirez",
    role: "Property Consultant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+1 (305) 555-0142",
    email: "michelle@houzez.com"
  },
  {
    name: "John Doe",
    role: "Investment Broker",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    phone: "+1 (305) 555-0188",
    email: "johndoe@houzez.com"
  }
];

const ContactAgent = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        <KeywordSearch />

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

            <span className="text-gray-600 font-semibold">Contact Agent</span>
          </div>
        </div>

        {/* Contact panel layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Get in Touch with our Agents
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Connect directly with our experienced regional agents to schedule property visits.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Middle: Agent Cards & Contact Form (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Agent Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {agentsContactList.map((agent) => (
                  <div key={agent.name} className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs text-center">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full mx-auto object-cover ring-4 ring-[#00aeff]/10"
                    />
                    <h3 className="font-bold text-slate-800 text-sm mt-3">{agent.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{agent.role}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-50 space-y-2 text-left">
                      <a 
                        href={`tel:${agent.phone}`}
                        className="flex items-center gap-2 text-xs font-semibold text-gray-550 hover:text-[#00aeff]"
                      >
                        <Phone size={12} className="text-gray-400" />
                        <span>{agent.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-2 text-xs font-semibold text-gray-550 hover:text-[#00aeff]"
                      >
                        <Mail size={12} className="text-gray-400" />
                        <span className="truncate">{agent.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-xs">
                <h2 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-4 mb-6">
                  Schedule a Visit / General Inquiry
                </h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-450 uppercase mb-1">First & Last Name</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Email Address</label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Inquiry Message</label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-3 top-3 text-gray-300" />
                      <textarea
                        rows="5"
                        placeholder="I would like to inquire about listings or schedule a home visit. Please get in touch with me."
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95"
                  >
                    <Send size={15} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              </div>

            </div>

            {/* Right Side: Office Address Details (1 col) */}
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-slate-800 text-base border-b border-gray-100 pb-3 mb-4">
                  Headquarters Office
                </h3>
                
                <div className="space-y-4 text-sm font-semibold text-slate-650">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#00aeff] mt-0.5 flex-shrink-0" />
                    <span>905 Brickell Bay Dr, Miami, FL 33131, USA</span>
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

                {/* Map Mockup */}
                <div className="relative rounded-lg overflow-hidden border border-gray-150 h-[200px] mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                    alt="Map mockup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 text-slate-700 px-3 py-1.5 rounded-full text-xs font-extrabold shadow-sm border border-gray-100 flex items-center gap-1">
                      📍 Click to view on map
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactAgent;
