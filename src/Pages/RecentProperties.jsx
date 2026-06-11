import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home } from "lucide-react";
import PropertyList from "../Componants/PropertyList";
import { propertiesData } from "../assets/propertiesData";
import Footer from "../Componants/Footer";

const RecentProperties = () => {
    // Show recently listed properties (e.g. reversing or sorting by id/added time)
    // We reverse to show the latest added items (id 12 first, then 11, etc.)
    const recentProperties = [...propertiesData].reverse();

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
                                to="/recent"
                                className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Recently Listed
                            </NavLink>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                                Recently Listed Properties
                            </h1>

                            <p className="text-gray-500 mt-2 text-sm sm:text-base">
                                Explore the freshest listings added to the market.
                            </p>
                        </div>
                        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    </div>
                </div>

                <PropertyList properties={recentProperties} />
            </div>
            <Footer />
        </div>
    );
};

export default RecentProperties;
