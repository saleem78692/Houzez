import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Phone, Mail, MapPin, Award, CheckCircle, Calendar, Star } from "lucide-react";
import PropertyList from "../Componants/PropertyList";
import { propertiesData } from "../assets/propertiesData";
import Footer from "../Componants/Footer";

const AgentProfile = () => {
  // Use properties listed by Samuel Palmer as default agent properties
  const agentProperties = propertiesData.filter(p => p.agent.name === "Samuel Palmer");

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
            <NavLink
              to="/our-agents"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              Agents
            </NavLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-semibold">Samuel Palmer</span>
          </div>
        </div>

        {/* Profile Details layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Box: Agent Quick Card (4 cols) */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Samuel Palmer"
                  className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-[#00aeff]/10 mb-4"
                />
                <h2 className="text-xl font-bold text-slate-800">Samuel Palmer</h2>
                <p className="text-xs text-[#00aeff] font-bold uppercase tracking-wider mt-1">Senior Sales Associate</p>
                <div className="flex justify-center items-center gap-1.5 mt-2.5">
                  <div className="flex text-amber-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs text-gray-550 font-bold">(15 Reviews)</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 text-left space-y-3.5 text-sm font-semibold text-slate-650">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400 flex-shrink-0" />
                  <span>+1 (305) 555-0199</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <span>samuel@houzez.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>Miami HQ Office, Florida, USA</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-405 font-bold uppercase">Listings</div>
                  <div className="text-lg font-black text-slate-800 mt-1">12</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-405 font-bold uppercase">Sales</div>
                  <div className="text-lg font-black text-slate-800 mt-1">140+</div>
                </div>
              </div>
            </div>

            {/* Right Box: Bio & Core Info (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4">About Samuel Palmer</h3>
                <p className="text-gray-550 text-sm leading-relaxed">
                  Samuel Palmer is a highly accomplished Senior Sales Associate with over a decade of hands-on experience in Miami's luxury real estate market. Specializing in high-end condos, waterfront estates, and investment portfolios, Samuel has successfully closed over 140 luxury transactions.
                </p>
                <p className="text-gray-550 text-sm leading-relaxed mt-4">
                  Known for his unmatched client dedication and transparent advisory approach, Samuel guides domestic and international buyers with ease. Whether you are looking for your forever family home or looking to expand your real estate investments, Samuel represents your key to premium property acquisitions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-3">Professional Milestones & Specialties:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <Award size={16} className="text-blue-500" />
                    <span>Certified Luxury Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>10+ Years Professional Broker License</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <Calendar size={16} className="text-purple-500" />
                    <span>Houzez Agent of the Year Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Listings section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 px-4">
              My Active Property Listings ({agentProperties.length})
            </h2>
            <PropertyList properties={agentProperties} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgentProfile;
