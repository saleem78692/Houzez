import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink, Link } from "react-router";
import { Home, Star, Phone, Mail, Award, TrendingUp, CheckCircle } from "lucide-react";
import Footer from "../Componants/Footer";

const topRealtorsData = [
  {
    rank: 1,
    name: "Samuel Palmer",
    role: "Senior Sales Associate",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    soldCount: 142,
    salesValue: "$82.4 Million",
    rating: 5.0,
    badge: "🏆 Top Seller 2025",
    phone: "+1 (305) 555-0199",
    email: "samuel@houzez.com"
  },
  {
    rank: 2,
    name: "Michelle Ramirez",
    role: "Property Consultant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    soldCount: 98,
    salesValue: "$54.1 Million",
    rating: 4.9,
    badge: "⭐️ Rising Star",
    phone: "+1 (305) 555-0142",
    email: "michelle@houzez.com"
  },
  {
    rank: 3,
    name: "John Doe",
    role: "Investment Broker",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    soldCount: 74,
    salesValue: "$41.8 Million",
    rating: 4.8,
    badge: "💼 Investment Pro",
    phone: "+1 (305) 555-0188",
    email: "johndoe@houzez.com"
  }
];

const TopRealtors = () => {
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
            <span className="text-gray-600 font-semibold">Top Realtors</span>
          </div>
        </div>

        {/* Rankings overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Our Top Realtors
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Recognizing our highest-performing real estate advisors based on sales value and reviews.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Leaderboard layout */}
          <div className="space-y-6">
            {topRealtorsData.map((realtor) => (
              <div key={realtor.rank} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow duration-200">
                
                {/* Left Side: Rank, Avatar and details */}
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#00aeff] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                    #{realtor.rank}
                  </div>
                  
                  <img
                    src={realtor.avatar}
                    alt={realtor.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-[#00aeff]/10 flex-shrink-0"
                  />
                  
                  <div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                      <h3 className="font-extrabold text-slate-800 text-lg hover:text-[#00aeff]">
                        <Link to="/agent-profile">{realtor.name}</Link>
                      </h3>
                      <span className="bg-[#00aeff]/10 text-[#00aeff] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                        {realtor.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{realtor.role}</p>
                    
                    <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-xs font-semibold text-gray-500">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <span className="text-slate-700 font-extrabold">{realtor.rating.toFixed(1)}</span>
                      <span>•</span>
                      <span>Review Score</span>
                    </div>
                  </div>
                </div>

                {/* Center Side: Stats metrics */}
                <div className="grid grid-cols-2 gap-8 w-full sm:w-auto text-center border-y sm:border-y-0 sm:border-x border-gray-50 py-4 sm:py-0 sm:px-10">
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <CheckCircle size={13} className="text-green-500" /> Sold Properties
                    </div>
                    <div className="text-2xl font-black text-slate-850 mt-1">{realtor.soldCount}+ Listings</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <TrendingUp size={13} className="text-blue-500" /> Sales Volume
                    </div>
                    <div className="text-2xl font-black text-slate-850 mt-1">{realtor.salesValue}</div>
                  </div>
                </div>

                {/* Right Side: Fast Contact buttons */}
                <div className="flex sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto justify-center">
                  <a
                    href={`tel:${realtor.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-5 border border-gray-200 rounded-lg hover:bg-gray-50 text-xs font-bold text-slate-700 transition-colors"
                  >
                    <Phone size={14} /> Call Agent
                  </a>
                  
                  <Link
                    to="/agent-profile"
                    className="flex items-center justify-center bg-[#00aeff] hover:bg-[#009ee6] text-white py-2.5 px-5 rounded-lg text-xs font-bold transition-colors shadow-xs active:scale-95 text-center"
                  >
                    View Listings
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopRealtors;
