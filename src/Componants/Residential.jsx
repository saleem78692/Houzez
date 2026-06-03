import React from 'react'
import { NavLink } from 'react-router'

function Residential() {
  return (
    <>

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
    </>
  )
}

export default Residential