import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BlockIcon from "@rsuite/icons/Block";
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
  Heart,
  Expand,
  Plus,
  Paperclip,
} from "lucide-react";
const sliderblock = [
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
  {
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    rupees: "$4500/mo",
    sell: "FOR Sale",
    Apartmentname: "Light and Modern Apartment",
    Address: "Aliganj Lucknow Utter Predesh, India",
    bed: "4",
    bathroom: "2",
    van: "1",
    widthSqr: "1200 sq Ft",
    humanimg: "https://randomuser.me/api/portraits/women/44.jpg",
    humanName: "Samuel Plamer",
    year: "6 year ago",
  },
];

function Slider() {
  return (
    <section>
      <div className="text-center text-4xl mt-10">
        Discover Our Featured Listings
      </div>
      <div className="text-center opacity-35">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </div>
      <div className="px-5">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {sliderblock.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white rounded-lg overflow-hidden shadow-md mx-auto mt-10">
                <div className="relative">
                  <img
                    src={item.img1}
                    alt="rooom-image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-lime-500 text-white text-xs px-3 py-1 rounded">
                    FEATURED
                  </div>

                  <div className="absolute top-5 right-5 bg-black/60 text-white text-xs px-3 py-1 rounded">
                    {item.sell}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-2xl">{item.rupees}</p>
                  </div>
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    <div className="bg-black/40 p-2 cursor-pointer rounded-md text-white">
                      <Expand size={15} />
                    </div>

                    <div className="bg-black/40 p-2 cursor-pointer rounded-md text-white">
                      <Heart size={15} />
                    </div>

                    <div className="bg-black/40 p-2 cursor-pointer rounded-md text-white">
                      <Plus size={15} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h1 className="text-xl font-semibold mb-4">
                    {item.Apartmentname}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <MapPin size={18} />
                    <p className="text-sm">{item.Address}</p>
                  </div>
                  <div className="flex items-center gap-5 ">
                    <div className="flex items-center gap-2">
                      <BedDouble size={15} />
                      <span className="text-sm font-semibold">{item.bed}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bath size={15} />
                      <span className="text-sm font-semibold">
                        {item.bathroom}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Car size={15} />
                      <span className="text-sm font-semibold">{item.van}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Ruler size={15} />
                      <span className="text-sm font-semibold">
                        {item.widthSqr}
                      </span>
                    </div>
                  </div>

                  <p className="font-bold text-xl">Apartment</p>
                </div>
                <div className="border-t p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.humanimg}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <p className="text-gray-600 text-sm">{item.humanName}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Paperclip size={20} />
                    <p className="text-sm">{item.year}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
