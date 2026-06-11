import React, { useState, useEffect } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Eye, Move, RefreshCw, Layers } from "lucide-react";
import Footer from "../Componants/Footer";

const roomsTourData = [
  {
    id: "living",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
    description: "Spacious family lounge featuring a double-height ceiling and floating fireplace.",
    hotspots: [
      { name: "Go to Kitchen", target: "kitchen", top: "45%", left: "80%" },
      { name: "Go to Master Suite", target: "bedroom", top: "50%", left: "15%" }
    ]
  },
  {
    id: "kitchen",
    name: "Chef's Kitchen",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
    description: "Equipped with luxury professional grade appliances and white marble islands.",
    hotspots: [
      { name: "Back to Living Room", target: "living", top: "60%", left: "20%" }
    ]
  },
  {
    id: "bedroom",
    name: "Primary Suite",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=80",
    description: "Premium bedroom design featuring custom oak panelling and high views.",
    hotspots: [
      { name: "Back to Living Room", target: "living", top: "55%", left: "85%" }
    ]
  }
];

const VirtualTour = () => {
  const [activeRoom, setActiveRoom] = useState(roomsTourData[0]);
  const [isPanning, setIsPanning] = useState(true);
  const [panOffset, setPanOffset] = useState(0);

  // Pan simulation effect
  useEffect(() => {
    let interval;
    if (isPanning) {
      interval = setInterval(() => {
        setPanOffset((prev) => (prev + 0.1) % 100);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPanning]);

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

            <span className="text-gray-600 font-semibold">Virtual Tour</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                3D Virtual Tour
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Take an immersive step-by-step 360-degree walkthrough of our premier residence.
              </p>
            </div>

            {/* Toggle pan control */}
            <button
              onClick={() => setIsPanning(!isPanning)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                isPanning 
                  ? "bg-[#00aeff] text-white hover:bg-[#009ee6]" 
                  : "bg-white text-slate-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <RefreshCw size={16} className={isPanning ? "animate-spin" : ""} />
              <span>{isPanning ? "Pause Auto Pan" : "Resume Auto Pan"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Room selector list left side */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs">
                <h3 className="font-bold text-slate-800 text-base border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                  <Layers size={18} className="text-[#00aeff]" />
                  <span>Select Area Room</span>
                </h3>
                
                <div className="space-y-2.5">
                  {roomsTourData.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => {
                        setActiveRoom(room);
                        setPanOffset(0);
                      }}
                      className={`w-full p-3.5 rounded-lg border text-left font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        activeRoom.id === room.id
                          ? "bg-[#00aeff]/5 border-[#00aeff] text-[#00aeff]"
                          : "bg-gray-55 border-gray-150 text-slate-650 hover:bg-gray-100"
                      }`}
                    >
                      <span>{room.name}</span>
                      <Eye size={15} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room details info box */}
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs">
                <h4 className="font-bold text-slate-800 text-sm mb-2">Room Overview</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  {activeRoom.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#00aeff] font-bold uppercase">
                  <Move size={14} />
                  <span>Click hotspots to navigate</span>
                </div>
              </div>
            </div>

            {/* Virtual Screen viewer right side */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-md h-[400px] sm:h-[500px] border border-gray-150 group">
                
                {/* 360 Simulated Panning Image */}
                <div 
                  className="absolute inset-0 w-[200%] h-full transition-transform duration-75 ease-linear"
                  style={{
                    backgroundImage: `url(${activeRoom.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: `${panOffset}% center`
                  }}
                />

                {/* Ambient vignette filter overlay */}
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none mix-blend-multiply opacity-60"></div>
                
                {/* Dynamic hotspot navigation nodes */}
                {activeRoom.hotspots.map((hotspot) => (
                  <button
                    key={hotspot.name}
                    onClick={() => {
                      const targetRoom = roomsTourData.find(r => r.id === hotspot.target);
                      if (targetRoom) {
                        setActiveRoom(targetRoom);
                        setPanOffset(0);
                      }
                    }}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className="absolute bg-white/90 text-[#00aeff] border-2 border-[#00aeff] px-3 py-1.5 rounded-full text-xs font-extrabold shadow-md hover:bg-[#00aeff] hover:text-white transition-all duration-200 cursor-pointer animate-pulse whitespace-nowrap hover:scale-105 active:scale-95"
                  >
                    🎯 {hotspot.name}
                  </button>
                ))}

                {/* Overlay indicator footer bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-xs px-4 py-2.5 rounded-lg text-white text-xs flex justify-between items-center">
                  <span className="font-bold tracking-wide">360° Panorama: {activeRoom.name}</span>
                  <span className="opacity-75">Drag or use controls to look around</span>
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

export default VirtualTour;
