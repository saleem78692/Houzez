import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Bed,
  Bath,
  DollarSign,
  Ruler,
  X,
} from "lucide-react";

function KeywordSearch({ onSearch }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [searchParams, setSearchParams] = useState({
    keyword: "",
    status: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setSearchParams((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClear = () => {
    const emptyState = {
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

    setSearchParams(emptyState);

    if (onSearch) {
      onSearch(emptyState);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);

      if (onSearch) {
        onSearch(searchParams);
      }
    }, 800);
  };

  return (
    <div className="sticky top-0 z-10 w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-2 shadow-2xl"
        >
          {/* Top Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_180px_180px_auto] gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

              <input
                type="text"
                id="keyword"
                placeholder="Search Properties..."
                value={searchParams.keyword}
                onChange={handleChange}
                className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-3 text-sm"
              />
            </div>

            {/* Status */}
            <select
              id="status"
              value={searchParams.status}
              onChange={handleChange}
              className="h-10 bg-white rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Property Status</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Type */}
            <select
              id="type"
              value={searchParams.type}
              onChange={handleChange}
              className="h-10 bg-white rounded-xl border border-slate-200 px-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="studio">Studio</option>
              <option value="office">Office</option>
              <option value="shop">Shop</option>
              <option value="condo">Condo</option>
            </select>

            {/* Buttons */}
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all ${
                  showAdvanced
                    ? "bg-sky-500 text-white"
                    : "bg-white text-slate-700 hover:bg-sky-50"
                }`}
              >
                <SlidersHorizontal size={20} />
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="h-10 px-5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all"
              >
                <X size={18} />
              </button>

              <button
                type="submit"
                disabled={isSearching}
                className="flex-1 md:flex-none h-10 px-8 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all"
              >
                {isSearching ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showAdvanced
                ? "max-h-[1000px] opacity-100 mt-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {/* Bedrooms */}
                <div className="relative">
                  <Bed className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <select
                    id="bedrooms"
                    value={searchParams.bedrooms}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4+ Beds</option>
                  </select>
                </div>

                {/* Bathrooms */}
                <div className="relative">
                  <Bath className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <select
                    id="bathrooms"
                    value={searchParams.bathrooms}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
                  >
                    <option value="">Bathrooms</option>
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4">4+ Baths</option>
                  </select>
                </div>

                {/* Min Price */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <input
                    type="number"
                    id="minPrice"
                    placeholder="Min Price"
                    value={searchParams.minPrice}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
                  />
                </div>

                {/* Max Price */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <input
                    type="number"
                    id="maxPrice"
                    placeholder="Max Price"
                    value={searchParams.maxPrice}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
                  />
                </div>

                {/* Min Area */}
                <div className="relative">
                  <Ruler className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <input
                    type="number"
                    id="minArea"
                    placeholder="Min SqFt"
                    value={searchParams.minArea}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
                  />
                </div>

                {/* Max Area */}
                <div className="relative">
                  <Ruler className="absolute left-3 top-4 text-slate-400 w-4 h-4" />

                  <input
                    type="number"
                    id="maxArea"
                    placeholder="Max SqFt"
                    value={searchParams.maxArea}
                    onChange={handleChange}
                    className="w-full h-10 bg-white rounded-xl border border-slate-200 pl-10 pr-4 text-sm"
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