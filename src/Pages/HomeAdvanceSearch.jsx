import React, { useState } from "react";
import {
    Search,
    ChevronDown,
    ChevronUp,
    Settings,
    Plus,
    Minus,
    Check,
    Building,
    Key,
    MapPin,
    Bed,
    Bath,
    Ruler,
    DollarSign
} from "lucide-react";
import bodyImage from "../assets/images/body-image.jpg";
import Slider from "../Componants/Slider";
import Residential from "../Componants/Residential";
import HouzezChoice from "../Componants/HouzezChoice";
import FinestProperty from "../Componants/FinestProperty";
import ExploreCity from "../Componants/ExploreCity";
import Agent from "../Componants/Agent";
import Testomonial from "../Componants/Testomonial";
import Footer from "../Componants/Footer";

function HomeAdvanceSearch() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [showOtherFeatures, setShowOtherFeatures] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState(null);

    // Search parameters
    const [searchParams, setSearchParams] = useState({
        keyword: "",
        city: "",
        status: "",
        type: "",
        bedrooms: "",
        bathrooms: "",
        minArea: "",
        maxArea: "",
        minPrice: "",
        maxPrice: "",
        propertyId: "",
    });

    // Price range slider state
    const [priceRange, setPriceRange] = useState({ min: 200, max: 2500000 });

    // Other features checklist
    const [features, setFeatures] = useState({
        airConditioning: false,
        swimmingPool: false,
        laundry: false,
        gym: false,
        internet: false,
        centralHeating: false,
        garage: false,
        alarm: false,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSearchParams((prev) => ({ ...prev, [id]: value }));
    };

    const handleFeatureToggle = (featureKey) => {
        setFeatures((prev) => ({ ...prev, [featureKey]: !prev[featureKey] }));
    };

    const handlePriceRangeChange = (e, type) => {
        const val = parseInt(e.target.value, 10);
        setPriceRange((prev) => ({
            ...prev,
            [type]: val,
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearching(true);
        setSearchResults(null);

        setTimeout(() => {
            setIsSearching(false);
            setSearchResults({
                count: Math.floor(Math.random() * 15) + 3,
                criteria: { ...searchParams, priceRange },
            });
        }, 1200);
    };

    const selectStyle =
        "w-full h-11 px-3 bg-white text-slate-700 border border-slate-200 rounded text-sm outline-none focus:border-sky-400 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a0aec0%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_12px_center] bg-no-repeat";

    const inputStyle =
        "w-full h-11 px-3 bg-white text-slate-800 border border-slate-200 rounded text-sm outline-none focus:border-sky-400";

    return (
        <>
            {/* Hero Background Banner Region */}
            <div
                className="w-full min-h-[550px] relative bg-cover bg-center flex items-end justify-center pb-16"
                style={{ backgroundImage: `url(${bodyImage})` }}
            >
                {/* Dark overlay to give contrast */}
                <div className="absolute inset-0 bg-black/30 z-0" />

                {/* Search Panel Container */}
                <div className="w-full max-w-6xl mx-auto px-4 z-10">
                    {/* Advanced Search Toggle Tab */}
                    <button
                        onClick={() => setIsFormOpen(!isFormOpen)}
                        className="flex items-center gap-2 px-5 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-t-md cursor-pointer transition-all active:scale-[0.98] shadow-lg"
                    >
                        <span>Advanced Search</span>
                        {isFormOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Collapsible Search Form Panel */}
                    <div
                        className={`w-full bg-[#004274] border border-[#003862] text-white p-6 shadow-2xl transition-all duration-300 ease-in-out ${isFormOpen
                                ? "opacity-100 scale-100 max-h-[1000px] pointer-events-auto rounded-r-md rounded-b-md"
                                : "opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden p-0 border-0"
                            }`}
                    >
                        {isFormOpen && (
                            <form onSubmit={handleSearch} className="space-y-6">
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                                    {/* Enter Keyword */}
                                    <div className="relative flex items-center lg:col-span-2">
                                        <Search className="absolute left-3 text-slate-400 w-4 h-4 pointer-events-none" />
                                        <input
                                            type="text"
                                            id="keyword"
                                            placeholder="Enter Keyword..."
                                            value={searchParams.keyword}
                                            onChange={handleChange}
                                            className={`${inputStyle} pl-10`}
                                        />
                                    </div>

                                    {/* All Cities */}
                                    <div>
                                        <select
                                            id="city"
                                            value={searchParams.city}
                                            onChange={handleChange}
                                            className={selectStyle}
                                        >
                                            <option value="">All Cities</option>
                                            <option value="India">India</option>
                                            <option value="Dubai">Dubai</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Kashmir">Kashmir</option>
                                        </select>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <select
                                            id="status"
                                            value={searchParams.status}
                                            onChange={handleChange}
                                            className={selectStyle}
                                        >
                                            <option value="">Status</option>
                                            <option value="sale">For Sale</option>
                                            <option value="rent">For Rent</option>
                                        </select>
                                    </div>

                                    {/* Type */}
                                    <div>
                                        <select
                                            id="type"
                                            value={searchParams.type}
                                            onChange={handleChange}
                                            className={selectStyle}
                                        >
                                            <option value="">Type</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="villa">Villa</option>
                                            <option value="studio">Studio</option>
                                            <option value="office">Office</option>
                                            <option value="shop">Shop</option>
                                        </select>
                                    </div>

                                    {/* Search Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSearching}
                                            className="w-full h-11 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold text-sm rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                                        >
                                            {isSearching ? "Searching..." : "Search"}
                                        </button>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                                    {/* Bathrooms */}
                                    <div>
                                        <select
                                            id="bathrooms"
                                            value={searchParams.bathrooms}
                                            onChange={handleChange}
                                            className={selectStyle}
                                        >
                                            <option value="">Bathrooms</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4+</option>
                                        </select>
                                    </div>

                                    {/* Min Area */}
                                    <div>
                                        <input
                                            type="number"
                                            id="minArea"
                                            placeholder="Min. Area"
                                            value={searchParams.minArea}
                                            onChange={handleChange}
                                            className={inputStyle}
                                        />
                                    </div>

                                    {/* Max Area */}
                                    <div>
                                        <input
                                            type="number"
                                            id="maxArea"
                                            placeholder="Max. Area"
                                            value={searchParams.maxArea}
                                            onChange={handleChange}
                                            className={inputStyle}
                                        />
                                    </div>

                                    {/* Min Price */}
                                    <div>
                                        <input
                                            type="number"
                                            id="minPrice"
                                            placeholder="Min. Price"
                                            value={searchParams.minPrice}
                                            onChange={handleChange}
                                            className={inputStyle}
                                        />
                                    </div>

                                    {/* Bedroom */}
                                    <div>
                                        <select
                                            id="bedrooms"
                                            value={searchParams.bedrooms}
                                            onChange={handleChange}
                                            className={selectStyle}
                                        >
                                            <option value="">Bedroom</option>
                                            <option value="1">1 Bed</option>
                                            <option value="2">2 Beds</option>
                                            <option value="3">3 Beds</option>
                                            <option value="4">4+ Beds</option>
                                        </select>
                                    </div>

                                    {/* More Options Button */}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => setShowOtherFeatures(!showOtherFeatures)}
                                            className="w-full h-11 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-sm rounded border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <Settings className="w-4 h-4 text-slate-400" />
                                            <span>More Options</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                                    {/* Max Price */}
                                    <div>
                                        <input
                                            type="number"
                                            id="maxPrice"
                                            placeholder="Max. Price"
                                            value={searchParams.maxPrice}
                                            onChange={handleChange}
                                            className={inputStyle}
                                        />
                                    </div>

                                    {/* Property ID */}
                                    <div>
                                        <input
                                            type="text"
                                            id="propertyId"
                                            placeholder="Property ID"
                                            value={searchParams.propertyId}
                                            onChange={handleChange}
                                            className={inputStyle}
                                        />
                                    </div>
                                </div>

                                {/* Price Range Slider Row */}
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-1.5 text-sm font-bold">
                                        <span>Price Range</span>
                                        <span className="text-slate-300 font-normal">&gt;</span>
                                        <span className="text-sky-400">${priceRange.min.toLocaleString()}</span>
                                        <span className="text-slate-300 font-normal">&gt;</span>
                                        <span className="text-sky-400">${priceRange.max.toLocaleString()}</span>
                                    </div>

                                    {/* Custom Double Range Slider */}
                                    <div className="relative w-full max-w-xl h-6 flex items-center">
                                        <div className="absolute left-0 right-0 h-1.5 bg-sky-950 rounded-full" />
                                        <div
                                            className="absolute h-1.5 bg-sky-400 rounded-full"
                                            style={{
                                                left: `${(priceRange.min / 3000000) * 100}%`,
                                                right: `${100 - (priceRange.max / 3000000) * 100}%`,
                                            }}
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="3000000"
                                            step="1000"
                                            value={priceRange.min}
                                            onChange={(e) => handlePriceRangeChange(e, "min")}
                                            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none"
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="3000000"
                                            step="1000"
                                            value={priceRange.max}
                                            onChange={(e) => handlePriceRangeChange(e, "max")}
                                            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none"
                                        />
                                    </div>
                                </div>

                                {/* Additional Features Toggle */}
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowOtherFeatures(!showOtherFeatures)}
                                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-sky-400 transition-colors"
                                    >
                                        {showOtherFeatures ? (
                                            <Minus className="w-4 h-4 border border-white/40 rounded p-0.5" />
                                        ) : (
                                            <Plus className="w-4 h-4 border border-white/40 rounded p-0.5" />
                                        )}
                                        <span>Other Features</span>
                                    </button>

                                    {showOtherFeatures && (
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-4 bg-sky-950/40 rounded-lg border border-sky-800/40 animate-fade-in">
                                            {Object.keys(features).map((key) => (
                                                <label
                                                    key={key}
                                                    className="flex items-center gap-3 cursor-pointer text-xs font-medium text-slate-300 hover:text-white transition-colors"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={features[key]}
                                                        onChange={() => handleFeatureToggle(key)}
                                                        className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 w-4 h-4"
                                                    />
                                                    <span className="capitalize">
                                                        {key.replace(/([A-Z])/g, " $1")}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </form>
                        )}

                        {/* Results Alert */}
                        {searchResults && (
                            <div className="mt-4 p-3.5 bg-emerald-500/20 border border-emerald-500/30 rounded text-center text-xs font-semibold text-emerald-300 animate-fade-in">
                                Found {searchResults.count} properties matching your criteria!
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Home Page Sections for Complete Flow */}
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

export default HomeAdvanceSearch;