import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { useParams, NavLink } from "react-router";
import { Home, Phone, Mail, MapPin, Award, CheckCircle, Calendar, Star } from "lucide-react";
import PropertyList from "../Componants/PropertyList";
import { propertiesData } from "../assets/propertiesData";
import Footer from "../Componants/Footer";

const agentsData = {
  "brittany-watkins": {
    name: "Brittany Watkins",
    avatar: "https://demo01.houzez.co/wp-content/uploads/2016/02/Artboard-2team-300x300.jpg",
    title: "Senior Sales Agent",
    phone: "+1 (305) 555-0144",
    email: "brittany@houzez.com",
    office: "Chicago Main Office, Illinois, USA",
    sales: "90+",
    bio: "Brittany Watkins is a highly dedicated Real Estate Specialist specializing in residential properties. With 5 years of experience in the industry, she has earned a reputation for finding the perfect homes for families in local communities.",
    specialties: ["Residential Specialist", "5+ Years Broker License", "Top Agent Award Nominee"]
  },
  "michelle-ramirez": {
    name: "Michelle Ramirez",
    avatar: "https://demo01.houzez.co/wp-content/uploads/2016/02/agent-1-300x300.jpg",
    title: "Sales Associate",
    phone: "+1 (305) 555-0166",
    email: "michelle@houzez.com",
    office: "Miami HQ Office, Florida, USA",
    sales: "80+",
    bio: "Michelle Ramirez is an experienced sales advisor with 5 years in real estate. Her focus is on finding value-driven opportunities for home buyers and providing seamless transactional support.",
    specialties: ["Buyer's Representative", "Condo & Townhouse Expert", "First-Time Home Buyer Specialist"]
  },
  "samuel-palmer": {
    name: "Samuel Palmer",
    avatar: "https://demo01.houzez.co/wp-content/uploads/2016/02/agent-3-300x300.jpg",
    title: "Senior Sales Associate",
    phone: "+1 (305) 555-0199",
    email: "samuel@houzez.com",
    office: "Miami HQ Office, Florida, USA",
    sales: "140+",
    bio: "Samuel Palmer is a senior sales associate with over a decade of experience in luxury real estate, specializing in high-end condos, waterfront estates, and investment portfolios.",
    specialties: ["Certified Luxury Specialist", "10+ Years Broker License", "Houzez Agent of the Year Winner"]
  }
};

const AgentProfile = () => {
  const { name } = useParams();
  
  // Normalize key from param (e.g. Samuel-Palmer -> samuel-palmer)
  const agentKey = name ? name.toLowerCase() : "samuel-palmer";
  const agent = agentsData[agentKey] || agentsData["samuel-palmer"];

  // Filter properties by this agent's name
  let agentProperties = propertiesData.filter(
    (p) => p.agent.name.toLowerCase() === agent.name.toLowerCase()
  );

  // If no properties are associated with this agent, use a subset of propertiesData as fallback
  if (agentProperties.length === 0) {
    agentProperties = propertiesData.slice(0, 3).map((p, idx) => ({
      ...p,
      agent: {
        ...p.agent,
        name: agent.name,
        avatar: agent.avatar
      }
    }));
  }

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
            <span className="text-gray-600 font-semibold">{agent.name}</span>
          </div>
        </div>

        {/* Profile Details layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Box: Agent Quick Card (4 cols) */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-6">
              <div>
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-[#00aeff]/10 mb-4"
                />
                <h2 className="text-xl font-bold text-slate-800">{agent.name}</h2>
                <p className="text-xs text-[#00aeff] font-bold uppercase tracking-wider mt-1">{agent.title}</p>
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
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <span>{agent.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{agent.office}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-450 font-bold uppercase">Listings</div>
                  <div className="text-lg font-black text-slate-800 mt-1">{agentProperties.length}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-450 font-bold uppercase">Sales</div>
                  <div className="text-lg font-black text-slate-800 mt-1">{agent.sales}</div>
                </div>
              </div>
            </div>

            {/* Right Box: Bio & Core Info (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4">About {agent.name}</h3>
                <p className="text-gray-550 text-sm leading-relaxed">
                  {agent.bio}
                </p>
                <p className="text-gray-550 text-sm leading-relaxed mt-4">
                  Known for client dedication and transparent advisory support, guiding domestic and international buyers with ease. Whether you are looking for your forever family home or looking to expand your real estate investments, {agent.name} represents your key to premium property acquisitions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-3">Professional Milestones & Specialties:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <Award size={16} className="text-blue-500" />
                    <span>{agent.specialties[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{agent.specialties[1]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-550">
                    <Calendar size={16} className="text-purple-500" />
                    <span>{agent.specialties[2]}</span>
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
