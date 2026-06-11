import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, ShieldCheck, HeartHandshake, Eye, BarChart3 } from "lucide-react";
import Footer from "../Componants/Footer";

const AboutUs = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        {/* <KeywordSearch /> */}

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={16} />
              <span>Home</span>
            </NavLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-semibold">About Us</span>
          </div>
        </div>

        {/* About content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              About Houzez
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              The global real estate platform simplifying property searches and client sales since 2018.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Our Mission & Philosophy</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Houzez was built on a simple vision: to construct an innovative and reliable real estate directory that empowers families and investors to identify their dream spaces without friction. We combine state-of-the-art UI elements, functional filtering, and verified local listing agents to ensure a premium real estate acquisition experience.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-sm sm:text-base">
                From luxury beachside condominiums to minimalist suburban villas, we handle a diverse, verified portfolio. Our tech-centric approaches, including 3D virtual walkthroughs and automated financial estimators, deliver unparalleled purchase assurance.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-md h-[250px] sm:h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful living room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm text-center mb-12">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#00aeff]">10K+</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">Listed Properties</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#00aeff]">500+</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">Certified Agents</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#00aeff]">99%</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">Customer Reviews</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#00aeff]">$2.4B</div>
              <div className="text-xs text-gray-400 font-bold uppercase mt-1">Sales Volume</div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center mb-8">Our Brand Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <ShieldCheck size={32} className="text-[#00aeff] mb-4" />
                <h3 className="font-bold text-slate-800 text-base mb-2">Maximum Trust</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Every property on our portal undergoes thorough checks for absolute legal and structural legitimacy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <HeartHandshake size={32} className="text-[#00aeff] mb-4" />
                <h3 className="font-bold text-slate-800 text-base mb-2">Customer First</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  We match you with local realtors who understand your criteria and guide you step-by-step.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <BarChart3 size={32} className="text-[#00aeff] mb-4" />
                <h3 className="font-bold text-slate-800 text-base mb-2">Dynamic Tech</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Using mortgage tools, map directories, and 3D walkthroughs, we make discovery seamless.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
