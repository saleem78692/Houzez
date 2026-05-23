import React, { useState } from "react";
import { NavLink } from "react-router";
import Slider from "./Slider";

function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All Status" },
    { key: "rent", label: "For Rent" },
    { key: "sale", label: "For Sale" },
  ];

  const selectClass =
    "w-full px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg appearance-none cursor-pointer outline-none focus:border-sky-400 focus:bg-white transition-all";

  return (
    <>
      <div className="w-full px-4 py-1 flex flex-col items-center justify-center">
        {/* Search Card */}
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-visible">
          {/* Tabs */}
          <div className="flex pl-6 pt-0 align-middle justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-xs font-bold tracking-wide border-none cursor-pointer transition-all duration-200 rounded-t-lg mr-0.5
                ${
                  activeTab === tab.key
                    ? "bg-white text-sky-500 shadow-md z-10 relative"
                    : "bg-sky-400 text-white hover:bg-sky-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="px-6 pb-6 pt-5 rounded-b-2xl rounded-tr-2xl bg-white">
            {/* One row — wraps on small screens */}
            <div className="flex flex-wrap xl:flex-nowrap gap-3 items-end">
              {/* Looking For */}
              <div className="flex-1 min-w-[160px]">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                  Looking For
                </label>
                <div className="relative">
                  <select className={selectClass}>
                    <option value="">Property Type</option>
                    <option>Office</option>
                    <option>Shop</option>
                    <option>Residential</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Multi Family Home</option>
                    <option>Single Family Home</option>
                    <option>Studio</option>
                    <option>Villa</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />

              {/* Location */}
              <div className="flex-1 min-w-[140px]">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                  Location
                </label>
                <div className="relative">
                  <select className={selectClass}>
                    <option value="">All Cities</option>
                    <option>India</option>
                    <option>Dubai</option>
                    <option>Pakistan</option>
                    <option>Kashmir</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />

              {/* Property Size */}
              <div className="flex-1 min-w-[140px]">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                  Property Size
                </label>
                <div className="relative">
                  <select className={selectClass}>
                    <option value="">Bedrooms</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n}>
                        {n} Bedroom{n > 1 ? "s" : ""}
                      </option>
                    ))}
                    <option>Any</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />

              {/* Budget */}
              <div className="flex-1 min-w-[140px]">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                  Your Budget
                </label>
                <div className="relative">
                  <select className={selectClass}>
                    <option value="">Max. Price</option>
                    <option>$1,000</option>
                    <option>$2,000</option>
                    <option>$3,000</option>
                    <option>$5,000</option>
                    <option>$10,000</option>
                    <option>$25,000</option>
                    <option>$50,000+</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
                    ▾
                  </span>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full xl:w-auto flex-shrink-0">
                <button className="w-full xl:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-200 shadow-lg shadow-sky-400/40 hover:shadow-sky-500/50 flex items-center justify-center gap-2 whitespace-nowrap">
                  🔍 Search
                </button>
              </div>
            </div>

            {/* Popular tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">
                Popular:
              </span>
              {["Apartment", "Villa", "Studio", "Office Space"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-sky-500 bg-sky-50 hover:bg-sky-100 px-3 py-1 rounded-full cursor-pointer transition-colors duration-150"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="text-center text-4xl mt-10">
          Discover Our Featured Listings
        </div>
        <div className="text-center opacity-35">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>
        <Slider />
      </section>
      <section className="bg-[#f7f7f7] py-24 px-4 md:px-10 overflow-hidden mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between">
            <div className="mb-16">
              <span className="w-16 h-[2px] bg-black block mb-6"></span>

              <h1 className="text-4xl font-semibold text-gray-800 mb-5">
                Residential
              </h1>

              <p className="text-gray-500 leading-7 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="relative group overflow-hidden rounded-sm shadow-xl">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/02/038.jpg"
                alt="Apartment"
                className="w-full h-[420px] object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">17 Properties</p>
                <h2 className="text-3xl font-semibold">Apartment</h2>
              </div>

              <NavLink to={"/apartmentdetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>

            <div className="mt-16">
              <span className="w-16 h-[2px] bg-black block mb-6"></span>

              <h1 className="text-4xl font-semibold text-gray-800 mb-5">
                Commercial
              </h1>

              <p className="text-gray-500 leading-7 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-sm shadow-xl h-[620px]">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/03/036-1170x785.jpg"
                alt="Studio"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">7 Properties</p>
                <h2 className="text-4xl font-semibold">Studio</h2>
              </div>

              <NavLink to={"/studiodetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>

            <div className="relative group overflow-hidden rounded-sm shadow-xl h-[280px]">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/03/206.jpg"
                alt="Office"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">3 Properties</p>
                <h2 className="text-3xl font-semibold">Office</h2>
              </div>

              <NavLink to={"/officedetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-sm shadow-xl h-[280px]">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/03/036-1170x785.jpg"
                alt="Single Family"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">12 Properties</p>
                <h2 className="text-3xl font-semibold">Single Family Home</h2>
              </div>

              <NavLink to={"/singleFamilyDetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>

            <div className="relative group overflow-hidden rounded-sm shadow-xl h-[280px]">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/03/031.jpg"
                alt="Villa"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">9 Properties</p>
                <h2 className="text-3xl font-semibold">Villa</h2>
              </div>

              <NavLink to={"/villadetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>

            <div className="relative group overflow-hidden rounded-sm shadow-xl h-[280px]">
              <img
                src="https://demo01.houzez.co/wp-content/uploads/2016/03/023.jpg"
                alt="Shop"
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm">3 Properties</p>
                <h2 className="text-3xl font-semibold">Shop</h2>
              </div>

              <NavLink to={"/shopdetails"} className="absolute bottom-6 left-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black duration-300">
                More Details
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
