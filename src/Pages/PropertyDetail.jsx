import React from "react";
import { useParams, Link } from "react-router";
import { propertiesData } from "../assets/propertiesData";
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
  Home,
  ArrowLeft,
  Mail,
  Phone,
  User,
  Calendar,
  Tag
} from "lucide-react";
import KeywordSearch from "../Componants/KeywordSearch";
import Footer from "../Componants/Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
        <div>
          <KeywordSearch />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center py-20">
            <h2 className="text-3xl font-bold text-slate-800">Property Not Found</h2>
            <p className="text-gray-500 mt-4">The property you are looking for does not exist or has been removed.</p>
            <Link
              to="/all-properties"
              className="inline-flex items-center gap-2 mt-6 bg-[#00aeff] hover:bg-[#009ee6] text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
            >
              <ArrowLeft size={18} />
              <span>Back to Properties</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        <KeywordSearch />

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            <span className="text-gray-400">/</span>

            <Link
              to="/all-properties"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              Properties
            </Link>

            <span className="text-gray-400">/</span>

            <span className="text-gray-600 truncate max-w-[200px] sm:max-w-xs">{property.title}</span>
          </div>
        </div>

        {/* Main Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#69c017] text-white text-xs font-bold px-2.5 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-[#434a54] text-white text-xs font-bold px-2.5 py-1 rounded">
                  {property.status}
                </span>
                {property.isHot && (
                  <span className="bg-[#e94b3c] text-white text-xs font-bold px-2.5 py-1 rounded">
                    HOT OFFER
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-850">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-gray-550 mt-2.5">
                <MapPin size={18} className="text-gray-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">{property.address}</span>
              </div>
            </div>

            <div className="text-left lg:text-right flex-shrink-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-800">
                {property.price}
              </div>
              <div className="text-sm text-gray-400 font-bold mt-1">
                {property.sqFtPrice}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Middle: Details & Gallery */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Image Banner */}
              <div className="relative h-[300px] sm:h-[450px] rounded-xl overflow-hidden shadow-sm">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description & Overview */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-xs">
                <h2 className="text-xl font-bold text-slate-800 border-b border-gray-100 pb-4 mb-5">
                  Property Description
                </h2>
                <p className="text-gray-650 leading-relaxed text-sm sm:text-base">
                  Welcome to {property.title}, a beautiful and premium {property.type.toLowerCase()} located in the heart of {property.address.split(",")[1]?.trim() || "the city"}. This exceptional property features modern architectural elements, high-quality finishes, and an open layout that receives beautiful natural light.
                </p>
                <p className="text-gray-650 leading-relaxed mt-4 text-sm sm:text-base">
                  Perfect for families or individuals seeking top-tier living, this house offers an exceptional space with {property.beds} bedrooms, {property.baths} bathrooms, and a dedicated garage with space for {property.cars} vehicle(s). Experience the luxury and premium lifestyle of a modern home!
                </p>
              </div>

              {/* Key Details Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-xs">
                <h2 className="text-xl font-bold text-slate-800 border-b border-gray-100 pb-4 mb-5">
                  Overview Details
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg text-center">
                    <BedDouble size={24} className="text-[#00aeff] mb-2" />
                    <span className="text-xs text-gray-400 font-semibold uppercase">Bedrooms</span>
                    <span className="text-base font-bold text-slate-700 mt-1">{property.beds} Beds</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg text-center">
                    <Bath size={24} className="text-[#00aeff] mb-2" />
                    <span className="text-xs text-gray-400 font-semibold uppercase">Bathrooms</span>
                    <span className="text-base font-bold text-slate-700 mt-1">{property.baths} Baths</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg text-center">
                    <Car size={24} className="text-[#00aeff] mb-2" />
                    <span className="text-xs text-gray-400 font-semibold uppercase">Garages</span>
                    <span className="text-base font-bold text-slate-700 mt-1">{property.cars} Garage</span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg text-center">
                    <Ruler size={24} className="text-[#00aeff] mb-2" />
                    <span className="text-xs text-gray-400 font-semibold uppercase">Area Size</span>
                    <span className="text-base font-bold text-slate-700 mt-1">{property.area}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-150">
                  <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
                      <Tag size={16} /> Property Type:
                    </span>
                    <span className="text-slate-700 text-sm font-bold">{property.type}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="flex items-center gap-2 text-gray-400 text-sm font-semibold">
                      <Calendar size={16} /> Posted Time:
                    </span>
                    <span className="text-slate-700 text-sm font-bold">{property.agent.addedTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Agent Card & Contact Info */}
            <div className="space-y-6">
              
              {/* Agent card */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs text-center">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-[#00aeff]/10"
                />
                <h3 className="text-lg font-bold text-slate-800 mt-4">
                  {property.agent.name}
                </h3>
                <p className="text-xs text-[#00aeff] font-bold uppercase tracking-wider mt-1">
                  Listing Agent
                </p>

                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-600 text-sm p-2.5 bg-gray-50 rounded">
                    <Phone size={16} className="text-gray-400" />
                    <span className="font-semibold">+1 (305) 555-0199</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm p-2.5 bg-gray-50 rounded">
                    <Mail size={16} className="text-gray-400" />
                    <span className="font-semibold">contact@houzez.com</span>
                  </div>
                </div>
              </div>

              {/* Message form */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="text-base font-bold text-slate-800 mb-4">
                  Inquire About This Property
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Your Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#00aeff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#00aeff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Message</label>
                    <textarea
                      rows="4"
                      defaultValue={`Hello, I am interested in [${property.title}]. Please contact me back with more information.`}
                      className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#00aeff]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold py-2.5 rounded text-sm transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
