import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, BedDouble, Bath, Ruler, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../Componants/Footer";

// Floor plan dataset
const floorPlansData = [
  {
    id: "skyline",
    name: "Skyline Penthouse Layout",
    description: "A luxury loft-style design spread across two levels, optimizing views and natural lighting.",
    size: "1,800 Sq Ft",
    bedrooms: "3 Beds",
    bathrooms: "2 Baths",
    floors: [
      {
        level: "Level 1: Lower Floor",
        size: "1,000 Sq Ft",
        rooms: "Living Room, Kitchen, Dining Area, Guest Suite, Powder Room",
        image: "https://images.openai.com/static-rsc-4/jnBEMiK_YFZGgJnlktSuaygD99aqW8r9eb1sQR3rnyGgJ2GytF97KkwHUX0NYeOeGLmwuZfkhjvbqkvLRQ8OtGlZmIQn4A2VcKpD52rcLfxac3--nTzuD6qtpG5zvFYzfQTWomwaVo99aw3lqogKOBS1wA0BQnkaUv6vIztbpGI?purpose=inline",
        highlights: ["Open Concept Kitchen", "Double-Height Glass Wall", "Master Dining Suite"],
        details: [
          { name: "Living Room", dimensions: "18' 0\" x 16' 4\"" },
          { name: "Kitchen & Dining", dimensions: "14' 2\" x 12' 6\"" },
          { name: "Guest Bedroom", dimensions: "12' 0\" x 10' 8\"" }
        ]
      },
      {
        level: "Level 2: Upper Loft",
        size: "800 Sq Ft",
        rooms: "Master Suite, Walk-in Closet, Home Office / Lounge, En-suite Bathroom",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
        highlights: ["Floating Glass Mezzanine", "Spacious Walk-in Wardrobe", "Deluxe Bath Tub"],
        details: [
          { name: "Master Bedroom", dimensions: "16' 8\" x 14' 2\"" },
          { name: "Home Office Lounge", dimensions: "12' 4\" x 11' 0\"" },
          { name: "Master En-suite", dimensions: "10' 6\" x 8' 2\"" }
        ]
      }
    ]
  },
  {
    id: "modern",
    name: "Guaranteed Modern Home Plan",
    description: "A functional three-story layout perfect for active families who enjoy spacious indoor and outdoor living.",
    size: "3,410 Sq Ft",
    bedrooms: "4 Beds",
    bathrooms: "3.5 Baths",
    floors: [
      {
        level: "Floor 1: Ground Level",
        size: "1,400 Sq Ft",
        rooms: "Foyer, Family Lounge, Kitchen, Formal Dining, Guest Bedroom, 1.5 Baths",
        image: "https://images.openai.com/static-rsc-4/TZMp92ZMl23LhiAuInT0sPvwcdy4BMBQv71p7H5HJNoP19m0Vq0ro4oPjIzOxHjh49hyTD5iYdst3wdH6P5G_lmh0E7zmriF6rjuUMhJ_R-8RUeJU-f5chFcWlALqF1iSSowhmbWFa23XK8ulTL0LUwG0n1fuYKdpIZx2vqsd74?purpose=inline",
        highlights: ["2-Car Attached Garage Access", "Butler's Pantry", "Patio Deck Connection"],
        details: [
          { name: "Family Room", dimensions: "20' 4\" x 17' 8\"" },
          { name: "Kitchen", dimensions: "15' 6\" x 13' 0\"" },
          { name: "Formal Dining", dimensions: "14' 0\" x 12' 2\"" },
          { name: "Guest Room", dimensions: "12' 2\" x 11' 8\"" }
        ]
      },
      {
        level: "Floor 2: Private Chambers",
        size: "1,200 Sq Ft",
        rooms: "Master Suite, 2 Kid Bedrooms, Laundry Room, 2 Full Bathrooms",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Private Balconies", "Laundry Chute", "Dual Vanities"],
        details: [
          { name: "Master Bedroom", dimensions: "18' 0\" x 15' 4\"" },
          { name: "Bedroom 2", dimensions: "13' 2\" x 12' 0\"" },
          { name: "Bedroom 3", dimensions: "12' 6\" x 12' 0\"" }
        ]
      },
      {
        level: "Floor 3: Entertainment Deck",
        size: "810 Sq Ft",
        rooms: "Game Room, Home Theater, Powder Room, Rooftop Terrace",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Wet Bar Setup", "Outdoor Firepit Area", "Sun Lounger Space"],
        details: [
          { name: "Game / Recreation Room", dimensions: "22' 0\" x 16' 4\"" },
          { name: "Home Theater Suite", dimensions: "15' 0\" x 12' 8\"" }
        ]
      }
    ]
  },
  {
    id: "villa",
    name: "Luxury Family Villa",
    description: "An expansive Mediterranean-style plan celebrating wide halls, outdoor courtyards, and grand suites.",
    size: "4,800 Sq Ft",
    bedrooms: "5 Beds",
    bathrooms: "4 Baths",
    floors: [
      {
        level: "First Floor: Living & Dining",
        size: "2,600 Sq Ft",
        rooms: "Grand Lobby, Great Room, Kitchen, Wine Cellar, Maid's Quarters, Guest Wing",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Grand Spiral Staircase", "Walk-In Wine Room", "Courtyard Patio Access"],
        details: [
          { name: "Great Room", dimensions: "24' 0\" x 20' 0\"" },
          { name: "Chef's Kitchen", dimensions: "18' 0\" x 16' 6\"" },
          { name: "Guest Suite", dimensions: "14' 4\" x 13' 0\"" }
        ]
      },
      {
        level: "Second Floor: Owner's Retreat",
        size: "2,200 Sq Ft",
        rooms: "Primary Master Suite, Junior Suite, 2 Bedrooms, Library Lounge",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
        highlights: ["Fireplace in Master Room", "Spa Bath Room", "Private Office Alcove"],
        details: [
          { name: "Primary Master Bedroom", dimensions: "22' 4\" x 18' 2\"" },
          { name: "Junior Suite", dimensions: "16' 0\" x 14' 0\"" },
          { name: "Library Lounge", dimensions: "15' 0\" x 13' 8\"" }
        ]
      }
    ]
  }
];

const FloorPlans = () => {
  const [selectedApartment, setSelectedApartment] = useState(floorPlansData[0]);
  const [activeFloorIndex, setActiveFloorIndex] = useState(0);
  const [expandedRoomDetail, setExpandedRoomDetail] = useState(true);

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        <KeywordSearch />

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

            <span className="text-gray-600 font-semibold">Floor Plans</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Interactive Floor Plans
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Explore the detailed architectural and structural layouts of our premium listings.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Tab Selection for Apartments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {floorPlansData.map((plan) => (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedApartment(plan);
                  setActiveFloorIndex(0);
                }}
                className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  selectedApartment.id === plan.id
                    ? "bg-white border-[#00aeff] shadow-md ring-2 ring-[#00aeff]/10"
                    : "bg-white border-gray-150 shadow-xs hover:border-gray-300"
                }`}
              >
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                  {plan.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold mt-3">
                  <span className="flex items-center gap-1">
                    <Ruler size={14} /> {plan.size}
                  </span>
                  <span>•</span>
                  <span>{plan.bedrooms}</span>
                  <span>•</span>
                  <span>{plan.bathrooms}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Details & Layout Viewer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Interactive level switches and specifications */}
            <div className="space-y-6 lg:col-span-1">
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-slate-800 text-lg border-b border-gray-100 pb-3 mb-4">
                  Select Floor Level
                </h3>
                
                <div className="space-y-3">
                  {selectedApartment.floors.map((floor, index) => (
                    <button
                      key={floor.level}
                      onClick={() => setActiveFloorIndex(index)}
                      className={`w-full p-4 rounded-lg border text-left font-semibold text-sm transition-all duration-200 cursor-pointer ${
                        activeFloorIndex === index
                          ? "bg-[#00aeff]/5 border-[#00aeff] text-[#00aeff]"
                          : "bg-gray-50 border-gray-150 text-slate-650 hover:bg-gray-100"
                      }`}
                    >
                      {floor.level}
                      <span className="block text-xs text-gray-400 font-medium mt-1">
                        Size: {floor.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floor Plan Specifications & Highlights */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-slate-800 text-lg border-b border-gray-100 pb-3 mb-4">
                  Floor Highlights
                </h3>
                <ul className="space-y-3">
                  {selectedApartment.floors[activeFloorIndex].highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm text-slate-650 font-medium">
                      <CheckCircle2 size={16} className="text-[#69c017]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Room Dimensions Accordion */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-xs overflow-hidden">
                <button
                  onClick={() => setExpandedRoomDetail(!expandedRoomDetail)}
                  className="w-full p-5 flex items-center justify-between font-bold text-slate-800 text-lg bg-gray-50/50 hover:bg-gray-50 border-b border-gray-100 cursor-pointer"
                >
                  <span>Room Dimensions</span>
                  {expandedRoomDetail ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {expandedRoomDetail && (
                  <div className="p-5 divide-y divide-gray-100">
                    {selectedApartment.floors[activeFloorIndex].details.map((room) => (
                      <div key={room.name} className="flex items-center justify-between py-2.5 text-sm">
                        <span className="text-gray-550 font-medium">{room.name}</span>
                        <span className="font-bold text-slate-700">{room.dimensions}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right: Layout Blueprint / Dynamic Schematic Image */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 pb-4 mb-6 gap-3">
                  <div>
                    <h2 className="font-extrabold text-slate-850 text-lg sm:text-xl">
                      {selectedApartment.floors[activeFloorIndex].level}
                    </h2>
                    <span className="text-xs text-gray-400 font-bold uppercase mt-1 block">
                      Blueprint Layout Schematic
                    </span>
                  </div>
                  <div className="bg-[#00aeff]/10 text-[#00aeff] text-xs font-extrabold px-3 py-1.5 rounded-full inline-block">
                    Area: {selectedApartment.floors[activeFloorIndex].size}
                  </div>
                </div>

                {/* Blueprint Graphic */}
                <div className="relative rounded-lg overflow-hidden border border-gray-150 h-[300px] sm:h-[450px]">
                  <img
                    src={selectedApartment.floors[activeFloorIndex].image}
                    alt={selectedApartment.floors[activeFloorIndex].level}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                  
                  {/* Schematic Overlay Design Elements */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded text-xs font-bold text-slate-700 shadow-sm border border-gray-100">
                    Schematic view
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-slate-800 text-sm mb-2">Mapped Area Rooms:</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                    {selectedApartment.floors[activeFloorIndex].rooms}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FloorPlans;
