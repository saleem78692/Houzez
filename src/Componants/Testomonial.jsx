import React from 'react'
import { NavLink } from 'react-router'
import { BedDouble, Bath, Car, Ruler, ChevronLeft, ChevronRight, Play, Star, MapPin, Phone, Mail } from "lucide-react";

function Testomonial() {
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
  return (
    <>
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
    </>
  )
}

export default Testomonial