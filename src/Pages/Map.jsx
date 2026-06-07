import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import {
  MapPin,
  Building2,
  Home,
  BadgeDollarSign,
  Search,
} from "lucide-react";
import Slider from "../Componants/Slider";
import Residential from "../Componants/Residential";
import HouzezChoice from "../Componants/HouzezChoice";
import FinestProperty from "../Componants/FinestProperty";
import ExploreCity from "../Componants/ExploreCity";
import Agent from "../Componants/Agent";
import Testomonial from "../Componants/Testomonial";
import Footer from "../Componants/Footer";

function Map() {
  return (
    <>
      <KeywordSearch />

      <section className="bg-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-0">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Explore Properties on Map
              </h2>
              <p className="text-slate-500 mt-1">
                Find apartments, villas, offices and commercial properties.
              </p>
            </div>

            {/* Property Types */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-sky-500 text-white rounded-xl shadow-lg">
                Apartments
              </button>

              <button className="px-4 py-2 bg-white rounded-xl shadow hover:shadow-lg transition">
                Villas
              </button>

              <button className="px-4 py-2 bg-white rounded-xl shadow hover:shadow-lg transition">
                Offices
              </button>

              <button className="px-4 py-2 bg-white rounded-xl shadow hover:shadow-lg transition">
                Shops
              </button>
            </div>
          </div>

          {/* Map Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_70px_rgba(14,165,233,0.18)] transition-all duration-500">
            

            {/* Map */}
            <div className="w-full h-[450px] md:h-[600px] xl:h-[700px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24679.36836950664!2d80.33075196459494!3d26.407879050367132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sapartment%20complex!5e1!3m2!1sen!2sin!4v1780836972110!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Map"
              />
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <Building2 className="text-sky-500" />
                <span className="text-2xl font-bold text-sky-500">
                  245
                </span>
              </div>

              <p className="text-slate-500 mt-3">Total Properties</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <Home className="text-green-500" />
                <span className="text-2xl font-bold text-green-500">
                  120
                </span>
              </div>

              <p className="text-slate-500 mt-3">For Sale</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <BadgeDollarSign className="text-orange-500" />
                <span className="text-2xl font-bold text-orange-500">
                  85
                </span>
              </div>

              <p className="text-slate-500 mt-3">For Rent</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <MapPin className="text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">
                  40
                </span>
              </div>

              <p className="text-slate-500 mt-3">Featured Listings</p>
            </div>
          </div>
        </div>
      </section>

      <Slider/>
      <Residential/>
      <HouzezChoice/>
      <FinestProperty/>
      <ExploreCity/>
      <Agent/>
      <Testomonial/>
      <Footer/>
    </>
  );
}

export default Map;