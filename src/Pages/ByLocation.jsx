import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, MapPin } from "lucide-react";
import PropertyList from "../Componants/PropertyList";
import { propertiesData } from "../assets/propertiesData";
import Footer from "../Componants/Footer";

const ByLocation = () => {
    // Extract unique locations/cities from data
    const getCity = (address) => {
        const parts = address.split(",");
        if (parts.length > 1) {
            // Usually the second to last part or second part contains the city name
            return parts[parts.length - 3]?.trim() || parts[1]?.trim() || "Other";
        }
        return "Other";
    };

    const cities = ["All", ...new Set(propertiesData.map(p => getCity(p.address)))];
    const [selectedCity, setSelectedCity] = useState("All");

    const filteredProperties = selectedCity === "All"
        ? propertiesData
        : propertiesData.filter(p => getCity(p.address) === selectedCity);

    return (
        <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
            <div>
                <KeywordSearch />
                <div>
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

                            <NavLink
                                to="/by-location"
                                className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                            >
                                By Location
                            </NavLink>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                                    Properties by Location
                                </h1>
                                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                                    Explore real estate listings in your favorite cities.
                                </p>
                            </div>
                        </div>
                        
                        {/* City Filter Pills */}
                        <div className="flex flex-wrap gap-2 mt-6 pb-2 border-b border-gray-100">
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => setSelectedCity(city)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                        selectedCity === city
                                            ? "bg-[#00aeff] text-white shadow-sm"
                                            : "bg-white border border-gray-200 text-gray-650 hover:bg-gray-50"
                                    }`}
                                >
                                    {city} ({city === "All" ? propertiesData.length : propertiesData.filter(p => getCity(p.address) === city).length})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {filteredProperties.length > 0 ? (
                    <PropertyList properties={filteredProperties} />
                ) : (
                    <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-550">
                        No properties found in this location.
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ByLocation;
