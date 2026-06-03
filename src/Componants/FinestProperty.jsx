import React from 'react'
import { NavLink } from 'react-router'
import { BedDouble, Bath, Car, Ruler, ChevronLeft, ChevronRight, Play, Star, MapPin, Phone, Mail } from "lucide-react";

function FinestProperty() {
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
  return (
    <>
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
    </>
  )
}

export default FinestProperty