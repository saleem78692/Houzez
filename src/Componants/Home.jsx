import React, { useState } from "react";
import { NavLink } from "react-router";
import Slider from "./Slider";
import { BedDouble, Bath, Car, Ruler, ChevronLeft, ChevronRight, Play, Star, MapPin, Phone, Mail } from "lucide-react";

const finestProperties = [
  {
    id: 1,
    title: "Light And Modern Apartment",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    status: "FOR RENT",
    beds: 4,
    baths: 2,
    garages: 1,
    area: "1200 Sq Ft",
    type: "APARTMENT",
    price: "$4,500/mo"
  },
  {
    id: 2,
    title: "New Apartment Nice View",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    status: "FOR RENT",
    beds: 3,
    baths: 1,
    garages: 1,
    area: "1789 Sq Ft",
    type: "APARTMENT",
    price: "$11,000/mo"
  },
  {
    id: 3,
    title: "Complex",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    status: "FOR RENT",
    beds: 5,
    baths: 3,
    garages: 1,
    area: "3450 Sq Ft",
    type: "APARTMENT",
    price: "$5,600/mo"
  },
  {
    id: 4,
    title: "Green View Design",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    status: "FOR RENT",
    beds: 1,
    baths: 1,
    garages: 1,
    area: "1760 Sq Ft",
    type: "APARTMENT",
    price: "$3,500/mo"
  },
  {
    id: 5,
    title: "Modern Loft Apartment",
    img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    status: "FOR RENT",
    beds: 1,
    baths: 1,
    garages: 1,
    area: "1678 Sq Ft",
    type: "APARTMENT",
    price: "$3,750/mo"
  },
  {
    id: 6,
    title: "Renovated Kitchen Apartment",
    img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    status: "FOR RENT",
    beds: 2,
    baths: 2,
    garages: 1,
    area: "1320 Sq Ft",
    type: "APARTMENT",
    price: "$1,890/mo"
  }
];

const citiesData = [
  {
    id: 1,
    name: "Chicago",
    propertiesCount: 13,
    img: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop",
    link: "/property?city=chicago"
  },
  {
    id: 2,
    name: "Miami",
    propertiesCount: 14,
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=800&auto=format&fit=crop",
    link: "/property?city=miami"
  },
  {
    id: 3,
    name: "New York",
    propertiesCount: 10,
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    link: "/property?city=newyork"
  },
  {
    id: 4,
    name: "Los Angeles",
    propertiesCount: 14,
    img: "https://images.unsplash.com/photo-1515898913320-f38370edab7a?q=80&w=800&auto=format&fit=crop",
    link: "/property?city=losangeles"
  }
];

const agent=[
  {
  id:1,
  name:"Brittany Watkins",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/Artboard-2team-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Brittany-Watkins"
},
{
  id:2,
  name:"Michelle Ramirez",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-1-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Michelle-Ramirez"
},
{
  id:3,
  name:"Samuel Palmer",
  img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-3-300x300.jpg",
  description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
  link:"/agent/Samuel-Palmer"
},
]

const testomonial = [
  {
    id:1,
    name:"John Doe",
    img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-1-300x300.jpg",
    description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
    link:"/agent/John-Doe"
  },
   {
    id:2,
    name:"Michelle Ramirez",
    img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-1-300x300.jpg",
    description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
    link:"/agent/Michelle-Ramirez"
  },
  {
    id:3,
    name:"Samuel Palmer",
    img:"https://demo01.houzez.co/wp-content/uploads/2016/02/agent-3-300x300.jpg",
    description:"Licensed real estate agent with 5 years of experience specializing in residential properties in the Chicago area. Dedicated to providing exceptional service and finding the perfect home for every client.",
    link:"/agent/Samuel-Palmer"
  },
]

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

      <section className="relative py-20 bg-cover bg-center bg-fixed mt-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#163a5a]/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1 text-white py-10 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                
                <div className="flex items-start">
                  <h2 className="text-3xl lg:text-4xl font-normal leading-tight">Why Houzez Is The<br/>Perfect Choice?</h2>
                </div>
                <div className="flex flex-col border-b border-white/20 pb-8">
                  <span className="text-2xl font-light mb-2">02.</span>
                  <h3 className="text-lg font-medium mb-3 leading-snug">Design Custom Leads<br/>Capture Forms</h3>
                  <p className="text-xs text-white/70 leading-relaxed">Keep track of your leads without having to pay for<br/>an external CRM</p>
                </div>

                <div className="flex flex-col border-b border-white/20 pb-8">
                  <span className="text-2xl font-light mb-2">01.</span>
                  <h3 className="text-lg font-medium mb-3 leading-snug">Suitable For Agents And<br/>Agencies</h3>
                  <p className="text-xs text-white/70 leading-relaxed">Never miss a sale! It's never been easier to turn<br/>leads into real customers</p>
                </div>
                
                <div className="flex flex-col border-b border-white/20 pb-8">
                  <span className="text-2xl font-light mb-2">03.</span>
                  <h3 className="text-lg font-medium mb-3 leading-snug">Highly Customizable Theme</h3>
                  <p className="text-xs text-white/70 leading-relaxed">Customize your website according to your<br/>expectations and requirements</p>
                </div>
                
              </div>
            </div>

            <div className="flex-none w-full lg:w-[480px]">
              <div className="bg-white rounded-md shadow-2xl p-8 lg:p-10 relative lg:-my-12">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Real Estate Inquiry Form</h3>
                <p className="text-[13px] text-gray-500 mb-8">Design custom lead capture forms that integrate<br/>with the Houzez CRM</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-800 mb-2">Inquiry Type</label>
                    <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-500 focus:outline-none focus:border-sky-400 bg-white">
                      <option>Select</option>
                      <option value="Purches">Purches</option>
                      <option value="Rent">Rent</option>
                      <option value="Sell">Sell</option>
                      <option value="Miss">Miss</option>
                      <option value="Evaluation">Evaluation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-800 mb-2">Information</label>
                    <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-500 focus:outline-none focus:border-sky-400 bg-white mb-3">
                      <option>I'm a</option>
                      <option value="Agent">I am Real State Agent</option>
                      <option value="Owner">I am Property Owner</option>
                      
                    </select>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <input type="text" placeholder="First Name" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                      <input type="text" placeholder="Last Name" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-800 mb-2 mt-2">Location</label>
                    <div className="grid grid-cols-2 gap-3">
                      <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-500 focus:outline-none focus:border-sky-400 bg-white">
                        <option>Select</option>
                        <option value="NewYork">NewYork</option>
                        <option value="LosAngeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Phoenix">Phoenix</option>
                      </select>
                      <input type="text" placeholder="Zip Code" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-800 mb-2 mt-2">Property</label>
                    <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-500 focus:outline-none focus:border-sky-400 bg-white mb-3">
                      <option>Select type</option>
                      <option value="comercial">Comercial</option>
                      <option value="residential">Residential</option>
                      <option value="">Commercial/Residential</option>
                      <option value="">Apartment</option>
                      <option value="">Townhouse</option>
                      <option value="">Condo</option>
                      <option value="">Commercial Building</option>
                      <option value="">Commercial Property</option>
                      <option value="">Commercial Real Estate</option>
                      <option value="">Commercial Property For Sale</option>
                      <option value="">Commercial Property For Rent</option>
                    </select>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <input type="text" placeholder="Max price" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                      <input type="text" placeholder="Minimum size (Sq Ft)" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Number of beds" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                      <input type="text" placeholder="Number of baths" className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400" />
                    </div>
                  </div>

                  <div className="flex items-start mt-4 pt-2">
                    <div className="flex items-center h-4 mt-0.5">
                      <input id="consent" type="checkbox" className="w-3.5 h-3.5 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-sky-300" />
                    </div>
                    <label htmlFor="consent" className="ml-2 text-[11px] font-medium text-gray-600 leading-tight">
                      I consent to having this website store my submitted<br/>information
                    </label>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full text-white bg-[#00aeff] hover:bg-[#009de6] focus:ring-4 focus:outline-none focus:ring-sky-300 font-semibold rounded-md text-[13px] px-5 py-3 text-center transition-colors">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full px-4 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center text-[40px] pt-12 text-gray-700 font-normal">Check Our Selection Of Finest Properties</div>
          <div className="text-center text-gray-500 pb-8 mb-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {finestProperties.map((property) => (
              <div 
                key={property.id} 
                className="relative group overflow-hidden rounded-md shadow-lg aspect-[4/3] w-full cursor-pointer"
              >

                <img 
                  src={property.img} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <span className="bg-[#77c320] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider backdrop-blur-xs">
                    {property.status}
                  </span>
                </div>

                <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronLeft size={16} />
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight size={16} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                  
                  <NavLink to={`/modernapartment` } className="text-[17px] font-medium tracking-wide mb-2 hover:text-sky-400 transition-colors duration-200 leading-snug">
                    {property.title}
                  </NavLink>

                  <div className="flex items-center gap-4 text-[12px] text-white/90 mb-3 font-medium">
                    <div className="flex items-center gap-1.5">
                      <BedDouble size={14} className="text-white/80" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={14} className="text-white/80" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Car size={14} className="text-white/80" />
                      <span>{property.garages}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Ruler size={14} className="text-white/80" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/70 mb-1">
                    {property.type}
                  </span>
                  <div className="text-lg font-bold text-white">
                    {property.price}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <NavLink to={'/loadmore'} className="text-sky-500 border-2 border-sky-500 p-3 px-10 m-auto bg-white rounded-sm hover:text-white hover:bg-sky-500 transition-all duration-300 ease-in-out">Load more</NavLink>
        </div>
      </section>
      
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-1 flex flex-col justify-center text-left">
            <h2 className="text-[34px] font-semibold text-gray-800 tracking-tight leading-tight mb-5">
              Explore Cities
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {citiesData.map((city) => (
              <NavLink
                key={city.id}
                to={city.link}
                className="relative group block overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[440px] w-full"
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent group-hover:from-black/90 group-hover:via-black/45 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-white">
                  <p className="text-xs text-white/80 font-light tracking-wide">
                    {city.propertiesCount} Properties
                  </p>
                  <h3 className="text-[26px] font-medium tracking-wide mt-1">
                    {city.name}
                  </h3>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-[11px] font-bold tracking-widest border-b border-white/50 group-hover:border-sky-400 group-hover:text-sky-400 transition-colors pb-0.5 uppercase">
                    More Details
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/50 group-hover:border-sky-400 group-hover:bg-sky-400 flex items-center justify-center transition-all duration-300">
                    <Play size={12} className="text-white fill-white ml-0.5" />
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-[40px] text-gray-700 font-normal leading-tight">
              Meet Our Agents
            </h2>
            <p className="text-[15px] text-gray-500 mt-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Agents Grid - Fully Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {agent.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-md p-6 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer group flex flex-col justify-between border border-gray-150"
              >
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative p-1.5 rounded-full border-2 border-dashed border-gray-200 group-hover:border-sky-500 transition-colors duration-300">
                      <img
                        src={agent.img}
                        alt={agent.name}
                        className="h-[180px] w-[180px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-medium text-gray-800 group-hover:text-sky-500 transition-colors duration-200">
                    {agent.name}
                  </h3>
                  <p className="text-center text-sm text-gray-500 mt-3 leading-relaxed px-2">
                    {agent.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center mt-6">
                  <NavLink
                    to={agent.link}
                    className="w-full sm:w-auto text-center text-sky-500 border-2 border-sky-500 py-3 px-10 bg-white rounded-sm hover:text-white hover:bg-sky-500 transition-all duration-300 ease-in-out text-sm font-medium"
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-sky-500 tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-[40px] text-gray-800 font-semibold leading-tight mt-3">
              What Our Clients Say
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 leading-relaxed">
              Discover how we help our clients find their dream homes and investments with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testomonial.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 ease-in-out hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-transparent group-hover:bg-sky-500 transition-all duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sky-500/10 font-serif text-6xl leading-none select-none">“</span>
                  </div>

                  <p className="text-gray-600 text-[14px] leading-relaxed mb-8 italic">
                    "{item.description}"
                  </p>
                </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div className="relative p-0.5 rounded-full border border-gray-200 group-hover:border-sky-500 transition-colors duration-300">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-sky-500 transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 tracking-wider uppercase font-semibold">
                      Satisfied Client
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <footer className="w-full bg-[#0a0d14] text-slate-300">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              <div>
                <h3 className="text-2xl font-semibold mb-6">REALEZE</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  The most beautiful places aren't on any map. Start your journey with REALEZE to find your perfect location
                  and make unforgettable memories.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><NavLink to={'/BuyHome'} className="text-sm hover:text-sky-400 transition-colors">Buy a Home</NavLink></li>
                  <li><NavLink to={'/SellHome'} className="text-sm hover:text-sky-400 transition-colors">Sell a Home</NavLink></li>
                  <li><NavLink to={'/about'} className="text-sm hover:text-sky-400 transition-colors">About Us</NavLink></li>
                  <li><NavLink to={'/contact'} className="text-sm hover:text-sky-400 transition-colors">Contact</NavLink></li>
                  <li><NavLink to={'/blog'} className="text-sm hover:text-sky-400 transition-colors">Blog</NavLink></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Discover</h3>
                <ul className="space-y-3">
                  <li><NavLink to={'/Cities'} className="text-sm hover:text-sky-400 transition-colors">Cities</NavLink></li>
                  <li><NavLink to={'/Areas'} className="text-sm hover:text-sky-400 transition-colors">Areas</NavLink></li>
                  <li><NavLink to={'/Agents'} className="text-sm hover:text-sky-400 transition-colors">Agents</NavLink></li>
                  <li><NavLink to={'/Developers'} className="text-sm hover:text-sky-400 transition-colors">Developers</NavLink></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="text-sm flex items-start">
                    <MapPin size={20} className="mr-3 text-sky-400" />
                    <div>
                      <p className="text-slate-400">123, Bodakdev,</p>
                      <p className="text-slate-400">Ahmedabad, Gujarat 380054</p>
                    </div>
                  </li>
                  <li className="text-sm flex items-center">
                    <Phone size={18} className="mr-3 text-sky-400" />
                    <span className="text-slate-400">+91 9137497814</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <Mail size={18} className="mr-3 text-sky-400" />
                    <span className="text-slate-400">[EMAIL_ADDRESS]</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="border-t border-slate-700 my-12"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()} REALEZE. All rights reserved.
              </div>
              <div className="flex gap-6">
                <NavLink to={'/privacy'} className="text-slate-400 hover:text-sky-400 transition-colors">Privacy Policy</NavLink>
                <NavLink to={'/terms'} className="text-slate-400 hover:text-sky-400 transition-colors">Terms of Service</NavLink>
                <NavLink to={'/sitemap'} className="text-slate-400 hover:text-sky-400 transition-colors">Sitemap</NavLink>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Home;
