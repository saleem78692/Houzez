import React from "react";
import { NavLink } from "react-router";
import { BedDouble, Bath, Car, Ruler, ChevronLeft, ChevronRight, Play, Star, MapPin, Phone, Mail } from "lucide-react";

function ExploreCity() {
  const citiesData = [
    {
      id: 1,
      name: "Chicago",
      propertiesCount: 13,
      img: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800&auto=format&fit=crop",
      link: "/property?city=chicago",
    },
    {
      id: 2,
      name: "Miami",
      propertiesCount: 14,
      img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=800&auto=format&fit=crop",
      link: "/property?city=miami",
    },
    {
      id: 3,
      name: "New York",
      propertiesCount: 10,
      img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
      link: "/property?city=newyork",
    },
    {
      id: 4,
      name: "Los Angeles",
      propertiesCount: 14,
      img: "https://images.unsplash.com/photo-1515898913320-f38370edab7a?q=80&w=800&auto=format&fit=crop",
      link: "/property?city=losangeles",
    },
  ];
  return (
    <>
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
    </>
  );
}

export default ExploreCity;
