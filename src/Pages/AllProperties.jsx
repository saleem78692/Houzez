import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home } from "lucide-react";
import Slider from "../Componants/Slider";
import Footer from "../Componants/Footer";

function AllProperties() {
  return (
    <>
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

          <NavLink
            to="/all-properties"
            className="text-gray-600 hover:text-blue-600 transition-all duration-300"
          >
            All Properties
          </NavLink>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            All Properties
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Browse all available properties and find your perfect home.
          </p>
        </div>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-8 mt-8 md:mt-12">
         <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    <Slider/>
    </div>
    <Footer/>
    </>
  );
}

export default AllProperties;