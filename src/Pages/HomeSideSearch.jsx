import React, { useState } from 'react';
import { Sparkles, Check, Search, MapPin, Building, Key, Bed, Bath, DollarSign, Ruler, Settings } from 'lucide-react';
import bodyImage from '../assets/images/body-image.jpg';
import Slider from '../Componants/Slider';
import Residential from '../Componants/Residential';
import HouzezChoice from '../Componants/HouzezChoice';
import FinestProperty from '../Componants/FinestProperty';
import ExploreCity from '../Componants/ExploreCity';
import Agent from '../Componants/Agent';
import Testomonial from '../Componants/Testomonial';
import Footer from '../Componants/Footer';

function HomeSideSearch() {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    type: "",
    status: "",
    city: "",
    propertyId: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
  });

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [id]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchResults(null);

    // Simulate search query execution against Houzez DB
    setTimeout(() => {
      setIsSearching(false);
      // Generate some mock properties matching the criteria
      setSearchResults({
        count: Math.floor(Math.random() * 12) + 4,
        criteria: {
          keyword: searchParams.keyword || "Any keyword",
          type: searchParams.type || "Any type",
          city: searchParams.city || "Any city",
        }
      });
    }, 1500);
  };

  const selectClass = "w-full pl-9 pr-8 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg appearance-none cursor-pointer outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all";
  const inputClass = "w-full pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all";

  return (
    <>
      <div
        className="min-h-[calc(100vh-68px)] w-full flex items-center justify-center bg-cover bg-center relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: `url(${bodyImage})` }}
      >

        <div className="absolute inset-0 bg-[#1e3044]/90 backdrop-blur-[3px] z-0" />


        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">


          <div className="flex flex-col justify-center space-y-6 text-white text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold w-max uppercase tracking-wider select-none">
              <Settings className="w-3.5 h-3.5 animate-spin-slow text-sky-400" />
              <span>Elementor Search Builder</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              Welcome To Houzez <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Version 2.0</span> Search Builder
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              No matter how complex (or how simple) your search bar needs to be, there is a user-friendly drag and drop interface that will help you ensure that you achieve the exact look you need.
            </p>

            <div className="border-t border-slate-500/20 pt-6">
              <ul className="space-y-4">
                {[
                  "Unlimited custom search layout possibilities",
                  "Fully dynamic geolocation search",
                  "Real-time autocomplete and property filters",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200 font-medium text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 sm:p-10 max-w-lg w-full transition-all duration-300 hover:shadow-sky-500/10">

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-left">Find Your Dream Home</h2>
              <div className="w-12 h-1 bg-sky-500 rounded-full mt-3 mb-6" />

              <form onSubmit={handleSearch} className="space-y-4">

                <div className="text-left relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 z-10">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="keyword"
                    placeholder="Enter Keyword (e.g. villa, pool, garden)"
                    value={searchParams.keyword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none"
                  />
                </div>


                <div className="grid grid-cols-2 gap-3">

                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <Building className="w-4 h-4" />
                    </span>
                    <select
                      id="type"
                      value={searchParams.type}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">All Types</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="studio">Studio</option>
                      <option value="office">Office</option>
                      <option value="shop">Shop</option>
                      <option value="condo">Condo</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>


                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <Key className="w-4 h-4" />
                    </span>
                    <select
                      id="status"
                      value={searchParams.status}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">All Status</option>
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-3">

                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <select
                      id="city"
                      value={searchParams.city}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">All Cities</option>
                      <option value="India">India</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Kashmir">Kashmir</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>


                  <div className="text-left relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                      <Settings className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      id="propertyId"
                      placeholder="Property ID"
                      value={searchParams.propertyId}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-3">

                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <Bed className="w-4 h-4" />
                    </span>
                    <select
                      id="bedrooms"
                      value={searchParams.bedrooms}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Bedrooms</option>
                      <option value="1">1 Bed</option>
                      <option value="2">2 Beds</option>
                      <option value="3">3 Beds</option>
                      <option value="4">4+ Beds</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>

                  {/* Bathrooms */}
                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <Bath className="w-4 h-4" />
                    </span>
                    <select
                      id="bathrooms"
                      value={searchParams.bathrooms}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Bathrooms</option>
                      <option value="1">1 Bath</option>
                      <option value="2">2 Baths</option>
                      <option value="3">3 Baths</option>
                      <option value="4">4+ Baths</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>
                </div>

                {/* Min Price & Max Price Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Min Price */}
                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <DollarSign className="w-4 h-4" />
                    </span>
                    <select
                      id="minPrice"
                      value={searchParams.minPrice}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Min. Price</option>
                      <option value="1000">$1,000</option>
                      <option value="5000">$5,000</option>
                      <option value="10000">$10,000</option>
                      <option value="50000">$50,000</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>

                  {/* Max Price */}
                  <div className="text-left relative">
                    <span className="absolute left-3 top-[13px] text-slate-400 pointer-events-none">
                      <DollarSign className="w-4 h-4" />
                    </span>
                    <select
                      id="maxPrice"
                      value={searchParams.maxPrice}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Max. Price</option>
                      <option value="50000">$50,000</option>
                      <option value="100000">$100,000</option>
                      <option value="500000">$500,000</option>
                      <option value="1000000">$1,000,000+</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">▾</span>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-3">

                  <div className="text-left relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <Ruler className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      id="minArea"
                      placeholder="Min. Area (Sq Ft)"
                      value={searchParams.minArea}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>


                  <div className="text-left relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <Ruler className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      id="maxArea"
                      placeholder="Max. Area (Sq Ft)"
                      value={searchParams.maxArea}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>


                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full mt-2 py-3.5 bg-sky-500 hover:bg-sky-600 active:scale-[0.99] text-white text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSearching ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Search
                    </>
                  )}
                </button>
              </form>


              {searchResults && (
                <div className="mt-4 p-3 bg-sky-50/80 dark:bg-slate-800/80 border border-sky-200 dark:border-sky-800/50 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 text-center animate-fade-in flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Found {searchResults.count} properties matching your query!</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
      <Slider />
      <Residential />
      <HouzezChoice />
      <FinestProperty />
      <ExploreCity />
      <Agent />
      <Testomonial />
      <Footer />

    </>
  );
}

export default HomeSideSearch;