import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Phone, Mail, MapPin, Building2, Users2, HomeIcon } from "lucide-react";
import Footer from "../Componants/Footer";

const agenciesData = [
  {
    id: 1,
    name: "Houzez Elite Realty",
    logo: "🏢",
    description: "The leading agency for luxury residential sales and premier commercial listings across Florida.",
    agentsCount: 15,
    listingsCount: 42,
    phone: "+1 (305) 555-0100",
    email: "miami@houzez.com",
    address: "905 Brickell Bay Dr, Miami, FL 33131"
  },
  {
    id: 2,
    name: "Modern Spaces Real Estate",
    logo: "🏡",
    description: "Innovative boutique agency focused on eco-friendly smart homes and minimalist urban townhouses.",
    agentsCount: 8,
    listingsCount: 22,
    phone: "+1 (305) 555-0120",
    email: "spaces@houzez.com",
    address: "88 Pine Crescent, Vancouver, BC"
  },
  {
    id: 3,
    name: "Sunset Realty Brokerage",
    logo: "🌇",
    description: "Specialized in cozy beachfront properties, holiday homes, and ocean view holiday rentals.",
    agentsCount: 10,
    listingsCount: 31,
    phone: "+1 (305) 555-0130",
    email: "sunset@houzez.com",
    address: "305 Ocean Drive, Miami Beach, FL"
  }
];

const Agencies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgencies = agenciesData.filter(agency =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <span className="text-gray-600 font-semibold">Agencies</span>
          </div>
        </div>

        {/* Directory details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Agency Directory
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Explore local brokerages and real estate agencies in your neighborhood.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Search filter */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs mb-8">
            <input
              type="text"
              placeholder="Search by agency name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
            />
          </div>

          {/* Agencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredAgencies.map((agency) => (
              <div key={agency.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="text-4xl p-3 bg-gray-50 rounded-xl">{agency.logo}</span>
                    <div>
                      <h3 className="font-extrabold text-slate-800 text-lg">{agency.name}</h3>
                      <p className="text-[10px] text-gray-450 font-bold uppercase tracking-wider mt-0.5">Licensed Agency</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold mb-5">
                    {agency.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-slate-50/50 rounded-lg border border-gray-100/50 text-xs text-gray-500 font-semibold">
                      <Users2 size={16} className="text-[#00aeff]" />
                      <span>{agency.agentsCount} Active Agents</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-slate-50/50 rounded-lg border border-gray-100/50 text-xs text-gray-500 font-semibold">
                      <HomeIcon size={16} className="text-[#00aeff]" />
                      <span>{agency.listingsCount} Properties</span>
                    </div>
                  </div>

                  <div className="space-y-3.5 border-t border-gray-50 pt-5 text-sm font-semibold text-slate-650">
                    <div className="flex items-center gap-3">
                      <Phone size={15} className="text-gray-400 flex-shrink-0" />
                      <span>{agency.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={15} className="text-gray-400 flex-shrink-0" />
                      <span>{agency.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{agency.address}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Connecting with ${agency.name}...`)}
                  className="w-full mt-6 bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold py-2.5 rounded-lg text-xs transition-all duration-200 cursor-pointer shadow-xs"
                >
                  Contact Agency
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agencies;
