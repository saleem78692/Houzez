import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
    title: "Luxury Villa",
    location: "Lucknow, India",
    price: "₹85 Lac",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600",
    title: "Modern Apartment",
    location: "Kanpur, India",
    price: "₹55 Lac",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600",
    title: "Premium House",
    location: "Delhi, India",
    price: "₹1.2 Cr",
  },
];

export default function PropertySlider() {
  return (
   <>
    <section className="w-full h-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="w-full h-screen"
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="relative w-full h-screen">
              
              {/* Background Image */}
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl text-white">
                    
                    <span className="inline-block px-4 py-2 rounded-full bg-sky-500 text-sm font-semibold mb-5">
                      Featured Property
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      {property.title}
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                      {property.location}
                    </p>

                    <h2 className="mt-6 text-3xl md:text-5xl font-bold text-sky-400">
                      {property.price}
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <button className="px-8 py-4 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold transition">
                        View Details
                      </button>

                      <button className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition">
                        Contact Agent
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
   </>
  );
}