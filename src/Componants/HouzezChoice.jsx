import React, { useState } from 'react'
import { Loader2 } from 'lucide-react';

function HouzezChoice() {
  const [isSearching,setIsSearching]=useState(false)

  const IsSearch=(e)=>{
   e.preventDefault();
   setIsSearching(true)
   setTimeout(()=>{
    setIsSearching(false)
   },2000)
  }
  return (
    <>
     <section className="relative py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
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
                    <button type="submit" onClick={IsSearch} disabled={isSearching} className="w-full flex items-center justify-center text-white bg-[#00aeff] hover:bg-[#009de6] focus:ring-4 focus:outline-none focus:ring-sky-300 font-semibold rounded-md text-[13px] px-5 py-3 text-center transition-colors">
                      {isSearching ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>Submit</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HouzezChoice