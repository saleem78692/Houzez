import React from 'react'
import { BedDouble, Bath, Car, Ruler, ChevronLeft, ChevronRight, Play, Star, MapPin, Phone, Mail } from "lucide-react";
import { NavLink } from 'react-router';

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#0a0d14] text-slate-300">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              <div>
                <h3 className="text-2xl font-semibold mb-6">REALEZE</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  The most beautiful places aren't on any map. Start your journey with REALEZE to find your perfect location
                  and make unforgettable memories.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><NavLink to={'/BuyHome'} className="text-sm hover:text-sky-400 transition-colors">Buy a Home</NavLink></li>
                  <li><NavLink to={'/SellHome'} className="text-sm hover:text-sky-400 transition-colors">Sell a Home</NavLink></li>
                  <li><NavLink to={'/about'} className="text-sm hover:text-sky-400 transition-colors">About Us</NavLink></li>
                  <li><NavLink to={'/contact'} className="text-sm hover:text-sky-400 transition-colors">Contact</NavLink></li>
                  <li><NavLink to={'/blog'} className="text-sm hover:text-sky-400 transition-colors">Blog</NavLink></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-6">Discover</h3>
                <ul className="space-y-3">
                  <li><NavLink to={'/Cities'} className="text-sm hover:text-sky-400 transition-colors">Cities</NavLink></li>
                  <li><NavLink to={'/Areas'} className="text-sm hover:text-sky-400 transition-colors">Areas</NavLink></li>
                  <li><NavLink to={'/Agents'} className="text-sm hover:text-sky-400 transition-colors">Agents</NavLink></li>
                  <li><NavLink to={'/Developers'} className="text-sm hover:text-sky-400 transition-colors">Developers</NavLink></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="text-sm flex items-start">
                    <MapPin size={20} className="mr-3 text-sky-400" />
                    <div>
                      <p className="text-slate-400">123, Bodakdev,</p>
                      <p className="text-slate-400">Ahmedabad, Gujarat 380054</p>
                    </div>
                  </li>
                  <li className="text-sm flex items-center">
                    <Phone size={18} className="mr-3 text-sky-400" />
                    <span className="text-slate-400">+91 9137497814</span>
                  </li>
                  <li className="text-sm flex items-center">
                    <Mail size={18} className="mr-3 text-sky-400" />
                    <span className="text-slate-400">[EMAIL_ADDRESS]</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="border-t border-slate-700 my-12"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()} REALEZE. All rights reserved.
              </div>
              <div className="flex gap-6">
                <NavLink to={'/privacy'} className="text-slate-400 hover:text-sky-400 transition-colors">Privacy Policy</NavLink>
                <NavLink to={'/terms'} className="text-slate-400 hover:text-sky-400 transition-colors">Terms of Service</NavLink>
                <NavLink to={'/sitemap'} className="text-slate-400 hover:text-sky-400 transition-colors">Sitemap</NavLink>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer