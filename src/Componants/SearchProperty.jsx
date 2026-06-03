import React, { useState } from 'react'

function SearchProperty() {
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
        
                <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-visible">
        
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
        
        
                  <div className="px-6 pb-6 pt-5 rounded-b-2xl rounded-tr-2xl bg-white">
                
                    <div className="flex flex-wrap xl:flex-nowrap gap-3 items-end">
                     
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
        
                     
                      <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />
        
                 
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
        
                 
                      <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />
        
        
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
        
                    
                      <div className="hidden xl:block w-px h-10 bg-slate-200 self-end mb-1" />
        
                  
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
        
                     
                      <div className="w-full xl:w-auto flex-shrink-0">
                        <button className="w-full xl:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-200 shadow-lg shadow-sky-400/40 hover:shadow-sky-500/50 flex items-center justify-center gap-2 whitespace-nowrap">
                          🔍 Search
                        </button>
                      </div>
                    </div>
        
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
    </>
  )
}

export default SearchProperty