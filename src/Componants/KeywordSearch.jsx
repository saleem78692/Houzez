import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Bed,
  Bath,
  DollarSign,
  Ruler,
  X,
  Loader2,
} from "lucide-react";

function KeywordSearch({ onSearch }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const initialParams = {
    keyword: "",
    status: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
  };

  const [searchParams, setSearchParams] = useState(initialParams);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setSearchParams(initialParams);
    if (onSearch) {
      onSearch(initialParams);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulated API latency
    setTimeout(() => {
      setIsSearching(false);
      if (onSearch) {
        onSearch(searchParams);
      }
    }, 800);
  };

  return (
    <div className="hidden md:block sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-2xl p-3 md:p-4 shadow-inner group transition-all duration-300 hover:border-slate-700/50"
        >
          {/* Top Search Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_200px_200px_auto] gap-3 items-center">
            
            {/* Search Input */}
            <div className="relative flex items-center group/input">
              <Search className="absolute left-4 text-slate-400 w-5 h-5 transition-colors group-focus-within/input:text-sky-400" />
              <input
                type="text"
                id="keyword"
                placeholder="Search properties, neighborhoods, zip codes..."
                value={searchParams.keyword}
                onChange={handleChange}
                className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-100 rounded-xl pl-12 pr-4 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              />
            </div>

            {/* Status Option */}
            <div className="relative">
              <select
                id="status"
                value={searchParams.status}
                onChange={handleChange}
                className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="text-slate-500">Property Status</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Type Option */}
            <div className="relative">
              <select
                id="type"
                value={searchParams.type}
                onChange={handleChange}
                className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="text-slate-500">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
                <option value="office">Office</option>
                <option value="shop">Shop</option>
                <option value="condo">Condo</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Action Buttons Container */}
            <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 col-span-1 sm:col-span-2 lg:col-span-1">
              
              {/* Toggle Filters Button */}
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`h-11 w-12 flex items-center justify-center rounded-xl font-medium border transition-all duration-200 ${
                  showAdvanced
                    ? "bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
                title="Advanced Filters"
              >
                <SlidersHorizontal size={18} className={showAdvanced ? "animate-pulse" : ""} />
              </button>

              {/* Reset Form Button */}
              <button
                type="button"
                onClick={handleClear}
                className="h-11 w-12 flex items-center justify-center bg-slate-950 border border-slate-800 hover:border-red-900/50 hover:bg-red-950/20 text-slate-400 hover:text-red-400 rounded-xl transition-all duration-200"
                title="Clear Filters"
              >
                <X size={18} />
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSearching}
                className="flex-1 h-11 px-6 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-800 disabled:cursor-not-allowed text-white rounded-xl font-medium shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
              >
                {isSearching ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Searching...</span>
                  </>
                ) : (
                  <span>Search</span>
                )}
              </button>
            </div>
          </div>

          {/* Advanced Filters Drawer */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              showAdvanced ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-4 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                
                {/* Bedrooms Selection */}
                <div className="relative flex items-center group/filter">
                  <Bed className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <select
                    id="bedrooms"
                    value={searchParams.bedrooms}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4+ Beds</option>
                  </select>
                </div>

                {/* Bathrooms Selection */}
                <div className="relative flex items-center group/filter">
                  <Bath className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <select
                    id="bathrooms"
                    value={searchParams.bathrooms}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Bathrooms</option>
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4+ Baths</option>
                  </select>
                </div>

                {/* Min Price Field */}
                <div className="relative flex items-center group/filter">
                  <DollarSign className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <input
                    type="number"
                    id="minPrice"
                    placeholder="Min Price"
                    value={searchParams.minPrice}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                {/* Max Price Field */}
                <div className="relative flex items-center group/filter">
                  <DollarSign className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <input
                    type="number"
                    id="maxPrice"
                    placeholder="Max Price"
                    value={searchParams.maxPrice}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                {/* Min Area Field */}
                <div className="relative flex items-center group/filter">
                  <Ruler className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <input
                    type="number"
                    id="minArea"
                    placeholder="Min SqFt"
                    value={searchParams.minArea}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                {/* Max Area Field */}
                <div className="relative flex items-center group/filter">
                  <Ruler className="absolute left-3.5 text-slate-500 w-4 h-4 transition-colors group-focus-within/filter:text-sky-400" />
                  <input
                    type="number"
                    id="maxArea"
                    placeholder="Max SqFt"
                    value={searchParams.maxArea}
                    onChange={handleChange}
                    className="w-full h-11 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl pl-10 pr-4 text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KeywordSearch;