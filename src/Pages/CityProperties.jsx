import React, { useState } from "react";
import { useSearchParams, NavLink, Link } from "react-router";
import KeywordSearch from "../Componants/KeywordSearch";
import Footer from "../Componants/Footer";
import PropertyList from "../Componants/PropertyList";
import { Home, MapPin } from "lucide-react";
import { propertiesData } from "../assets/propertiesData";

// Helper to generate realistic properties for a city
const generateMockProperties = (cityName, count) => {
  const targetCount = count;
  const list = [];
  const lowercaseCity = cityName.toLowerCase();

  // 1. Gather existing properties from propertiesData that match the city
  propertiesData.forEach((p) => {
    if (p.address.toLowerCase().includes(lowercaseCity)) {
      list.push(p);
    }
  });

  const cityImages = {
    chicago: [
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
    ],
    miami: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
    ],
    newyork: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop"
    ],
    losangeles: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1448630360428-654a55853e08?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=800&auto=format&fit=crop"
    ]
  };

  const images = cityImages[lowercaseCity] || cityImages.miami;
  const types = ["SINGLE FAMILY HOME", "VILLA", "APARTMENT", "STUDIO", "DUPLEX", "PENTHOUSE"];
  const statuses = ["FOR SALE", "FOR RENT"];
  
  // 2. Generate remaining mock items to reach the exact count
  let currentId = 500;
  while (list.length < targetCount) {
    const randomIdx = list.length;
    const type = types[randomIdx % types.length];
    const status = statuses[randomIdx % statuses.length];
    const beds = (randomIdx % 4) + 2;
    const baths = (randomIdx % 3) + 1.5;
    const cars = (randomIdx % 2) + 1;
    const area = 1200 + (randomIdx * 250);
    const priceVal = status === "FOR RENT" ? 2200 + (randomIdx * 350) : 340000 + (randomIdx * 65000);
    const priceStr = status === "FOR RENT" ? `$${priceVal.toLocaleString()}/mo` : `$${priceVal.toLocaleString()}`;

    list.push({
      id: currentId++,
      title: `Guaranteed Premium ${type.charAt(0) + type.slice(1).toLowerCase()} in ${cityName}`,
      address: `${100 + randomIdx * 12} ${["Ocean Drive", "Grand Avenue", "Sunset Blvd", "Michigan Ave", "Maple St"][randomIdx % 5]}, ${cityName}, USA`,
      price: priceStr,
      sqFtPrice: `$${Math.round(priceVal / area)}/sq ft`,
      beds,
      baths,
      cars,
      area: `${area} Sq Ft`,
      type,
      status,
      isFeatured: randomIdx % 2 === 0,
      isHot: randomIdx % 3 === 0,
      image: images[randomIdx % images.length],
      agent: {
        name: ["Samuel Palmer", "Michelle Ramirez", "John Doe"][randomIdx % 3],
        avatar: `https://randomuser.me/api/portraits/${randomIdx % 2 === 0 ? "men" : "women"}/${30 + randomIdx}.jpg`,
        addedTime: `${randomIdx + 1} months ago`
      }
    });
  }

  return list;
};

const CityProperties = () => {
  const [searchParams] = useSearchParams();
  const rawCity = searchParams.get("city") || "miami";
  
  // Normalize city name
  const cityMap = {
    chicago: { name: "Chicago", count: 13 },
    miami: { name: "Miami", count: 14 },
    newyork: { name: "New York", count: 10 },
    losangeles: { name: "Los Angeles", count: 14 }
  };

  const currentCityInfo = cityMap[rawCity.toLowerCase()] || cityMap.miami;
  const cityName = currentCityInfo.name;
  const targetCount = currentCityInfo.count;

  const cityProperties = generateMockProperties(cityName, targetCount);

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
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

            <span className="text-gray-600">Properties in {cityName}</span>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                Properties in {cityName}
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl">
                Browse properties listed in {cityName} and find the perfect location matching your requirements.
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-500 bg-white border border-gray-150 px-4 py-2 rounded-lg shadow-sm self-start md:self-auto">
              Total: <span className="text-blue-600 font-bold text-base">{targetCount}</span> Properties
            </div>
          </div>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
        </div>

        <PropertyList properties={cityProperties} />
      </div>
      <Footer />
    </div>
  );
};

export default CityProperties;
