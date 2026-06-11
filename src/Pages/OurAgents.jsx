import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink, Link } from "react-router";
import { Home, Phone, Mail, MapPin, Search, Grid, List } from "lucide-react";
import Footer from "../Componants/Footer";

const agentsData = [
  {
    id: 1,
    name: "Samuel Palmer",
    role: "Senior Sales Associate",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+1 (305) 555-0199",
    email: "samuel@houzez.com",
    address: "Miami Office, USA",
    listingsCount: 6,
    agency: "Houzez Elite Realty"
  },
  {
    id: 2,
    name: "Michelle Ramirez",
    role: "Property Consultant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+1 (305) 555-0142",
    email: "michelle@houzez.com",
    address: "Coral Gables Office, USA",
    listingsCount: 4,
    agency: "Modern Spaces"
  },
  {
    id: 3,
    name: "John Doe",
    role: "Investment Broker",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    phone: "+1 (305) 555-0188",
    email: "johndoe@houzez.com",
    address: "New York Office, USA",
    listingsCount: 3,
    agency: "Houzez Elite Realty"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Leasing Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    phone: "+1 (305) 555-0210",
    email: "sarah@houzez.com",
    address: "Miami Beach Office, USA",
    listingsCount: 5,
    agency: "Sunset Realty"
  }
];

const OurAgents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgency, setSelectedAgency] = useState("All");

  const agencies = ["All", ...new Set(agentsData.map(a => a.agency))];

  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          agent.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAgency = selectedAgency === "All" || agent.agency === selectedAgency;
    return matchesSearch && matchesAgency;
  });

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
            <span className="text-gray-600 font-semibold">Our Agents</span>
          </div>
        </div>

        {/* Directory details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Meet Our Agents
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Find and connect with professional realtors to assist your buying or renting journey.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Search and Agency Filters */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by agent name or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
              />
            </div>
            
            <div className="w-full md:w-64">
              <select
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
                className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700"
              >
                <option value="All">Filter by Agency (All)</option>
                {agencies.filter(agency => agency !== "All").map(agency => (
                  <option key={agency} value={agency}>{agency}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Agents Grid */}
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
                  <div className="p-6 text-center">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-[#00aeff]/10 mb-4"
                    />
                    <h3 className="font-bold text-slate-800 text-base hover:text-[#00aeff]">
                      <Link to="/agent-profile">{agent.name}</Link>
                    </h3>
                    <p className="text-xs text-[#00aeff] font-bold uppercase tracking-wider mt-1">{agent.role}</p>
                    <p className="text-xs text-gray-400 mt-2 font-semibold flex items-center justify-center gap-1">
                      <MapPin size={12} /> {agent.address}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-50 text-left space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                        <span>Agency:</span>
                        <span className="text-slate-700">{agent.agency}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                        <span>Active Listings:</span>
                        <span className="bg-blue-50 text-[#00aeff] px-2 py-0.5 rounded font-bold">{agent.listingsCount} Properties</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer bar */}
                  <div className="border-t border-gray-50 bg-gray-50/50 p-4 grid grid-cols-2 gap-2 text-center text-xs font-bold">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center justify-center gap-1.5 py-2 border border-gray-200 rounded hover:bg-white text-slate-700 transition-colors"
                    >
                      <Phone size={14} /> Call
                    </a>
                    <Link
                      to="/agent-profile"
                      className="flex items-center justify-center bg-[#00aeff] hover:bg-[#009ee6] text-white py-2 rounded transition-colors shadow-xs active:scale-95"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500 font-medium bg-white rounded-xl border border-gray-100">
              No agents match your filters.
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurAgents;
