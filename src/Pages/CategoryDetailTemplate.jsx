import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink, Link } from "react-router";
import { 
  Home, BedDouble, Bath, Car, Ruler, MapPin, Heart, Expand, Plus, Paperclip,
  ChevronLeft, ChevronRight, ChevronsRight
} from "lucide-react";
import Footer from "../Componants/Footer";

function CategoryDetailTemplate({ title, description, categoryProperties }) {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;

  const totalPages = Math.ceil(categoryProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = categoryProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        <KeywordSearch />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={18} />
              <span>Home</span>
            </NavLink>

            <span className="text-gray-400">/</span>

            <span className="text-gray-600">{title}</span>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                {title}
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl">
                {description}
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-500 bg-white border border-gray-150 px-4 py-2 rounded-lg shadow-sm self-start md:self-auto">
              Total: <span className="text-blue-600 font-bold text-base">{categoryProperties.length}</span> Properties
            </div>
          </div>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
        </div>

        {categoryProperties.length === 0 ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-700">No properties available in this category.</h2>
            <p className="text-gray-400 mt-2">Please check back later or browse other categories.</p>
            <Link
              to="/all-properties"
              className="inline-flex items-center gap-2 mt-6 bg-[#00aeff] hover:bg-[#009ee6] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Browse All Properties
            </Link>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-6">
              {currentProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
                >
                  <div className="relative w-full lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[240px] flex-shrink-0 group overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {property.isFeatured && (
                      <div className="absolute top-4 left-4 bg-[#69c017] text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                      <button className="bg-black/50 hover:bg-black/80 text-white p-2 rounded transition-colors duration-250 cursor-pointer">
                        <Expand size={15} />
                      </button>
                      <button className="bg-black/50 hover:bg-black/80 text-white p-2 rounded transition-colors duration-250 cursor-pointer">
                        <Heart size={15} />
                      </button>
                      <button className="bg-black/50 hover:bg-black/80 text-white p-2 rounded transition-colors duration-250 cursor-pointer">
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="flex-grow p-5 sm:p-6 flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-[#434a54] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                            {property.status}
                          </span>
                          {property.isHot && (
                            <span className="bg-[#e94b3c] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                              Hot Offer
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200">
                          <Link to={`/property/${property.id}`}>{property.title}</Link>
                        </h3>

                        <div className="flex items-center gap-1 text-gray-400 mt-2 text-sm">
                          <MapPin size={15} className="text-gray-400 flex-shrink-0" />
                          <span className="truncate">{property.address}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-slate-600 text-sm">
                          <div className="flex items-center gap-1.5">
                            <BedDouble size={18} className="text-slate-400" />
                            <span className="font-semibold text-slate-700">{property.beds}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath size={18} className="text-slate-400" />
                            <span className="font-semibold text-slate-700">{property.baths}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Car size={18} className="text-slate-400" />
                            <span className="font-semibold text-slate-700">{property.cars}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Ruler size={18} className="text-slate-400" />
                            <span className="font-semibold text-slate-700">{property.area}</span>
                          </div>
                        </div>

                        <div className="mt-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {property.type}
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between lg:justify-start lg:gap-8">
                        <div className="flex items-center gap-3">
                          <img
                            src={property.agent.avatar}
                            alt={property.agent.name}
                            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
                          />
                          <span className="text-sm font-medium text-gray-600 hover:text-blue-600 cursor-pointer">
                            {property.agent.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <Paperclip size={14} />
                          <span>{property.agent.addedTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col justify-between md:justify-between items-end md:items-end w-full md:w-auto md:min-w-[150px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                      <div className="text-right">
                        <div className="text-2xl font-extrabold text-slate-800">
                          {property.price}
                        </div>
                        <div className="text-xs text-gray-400 font-semibold mt-0.5">
                          {property.sqFtPrice}
                        </div>
                      </div>

                      <Link
                        to={`/property/${property.id}`}
                        className="bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 shadow-sm hover:shadow active:scale-95"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1.5 mt-12 mb-6 select-none">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 flex items-center justify-center rounded border text-sm transition-all duration-200 ${
                    currentPage === 1
                      ? "text-gray-300 border-gray-100 cursor-not-allowed"
                      : "text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                  }`}
                >
                  <ChevronLeft size={16} />
                </button>

                {getPageNumbers().map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 flex items-center justify-center rounded border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      currentPage === pageNumber
                        ? "bg-[#00aeff] border-[#00aeff] text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 flex items-center justify-center rounded border text-sm transition-all duration-200 ${
                    currentPage === totalPages
                      ? "text-gray-300 border-gray-100 cursor-not-allowed"
                      : "text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                  }`}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CategoryDetailTemplate;
