import React, { useState } from "react";
import { NavLink } from "react-router";
import { Home, Upload, ShieldCheck, Info, MapPin, Tag } from "lucide-react";
import KeywordSearch from "../Componants/KeywordSearch";
import Footer from "../Componants/Footer";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("SINGLE FAMILY HOME");
  const [status, setStatus] = useState("FOR SALE");
  const [area, setArea] = useState("");
  const [beds, setBeds] = useState(2);
  const [baths, setBaths] = useState(2);
  const [garages, setGarages] = useState(1);
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Listing submitted successfully!\nTitle: ${title}\nPrice: $${price}\nStatus: ${status}`);
    // Clear inputs
    setTitle("");
    setPrice("");
    setDescription("");
    setArea("");
    setAddress("");
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        {/* <KeywordSearch /> */}

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-center gap-2 text-sm font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={16} />
              <span>Home</span>
            </NavLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-semibold">Create Listing</span>
          </div>
        </div>

        {/* Form area */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Submit New Property
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Publish your property details into our verified global directory.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Basic Information */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-150 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <Info size={18} className="text-[#00aeff]" />
                <span>Basic Property Info</span>
              </h2>

              <div>
                <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Property Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Guaranteed Modern Family Home"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Description</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Describe your property rooms, highlights, and nearby facilities..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Property Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700"
                  >
                    <option value="SINGLE FAMILY HOME">Single Family Home</option>
                    <option value="VILLA">Villa</option>
                    <option value="TOWNHOUSE">Townhouse</option>
                    <option value="PENTHOUSE">Penthouse</option>
                    <option value="APARTMENT">Apartment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Property Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700"
                  >
                    <option value="FOR SALE">For Sale</option>
                    <option value="FOR RENT">For Rent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Pricing & Specs */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-150 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <Tag size={18} className="text-[#00aeff]" />
                <span>Price & Specifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Price ($)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 590000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Area Size (Sq Ft)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 3400"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Bedrooms</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={beds}
                    onChange={(e) => setBeds(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Bathrooms</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={baths}
                    onChange={(e) => setBaths(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Garages / Cars</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={garages}
                    onChange={(e) => setGarages(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Location Details */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-150 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-[#00aeff]" />
                <span>Property Location</span>
              </h2>

              <div>
                <label className="block text-xs font-bold text-gray-450 uppercase mb-1">Physical Address</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 905 Brickell Bay Dr, Miami, FL 33131"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                />
              </div>
            </div>

            {/* Section 4: Media Upload Mockup */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-150 shadow-xs space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <Upload size={18} className="text-[#00aeff]" />
                <span>Property Gallery</span>
              </h2>

              <div 
                onClick={() => alert("Upload media files...")}
                className="border-2 border-dashed border-gray-200 hover:border-[#00aeff] transition-colors rounded-xl p-8 text-center cursor-pointer space-y-3"
              >
                <Upload size={36} className="text-gray-450 mx-auto" />
                <div className="text-xs font-bold text-slate-700">Drag & Drop Property Images</div>
                <div className="text-[10px] text-gray-400 font-semibold">Or click to browse from system files (JPEG, PNG only)</div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00aeff] hover:bg-[#009ee6] text-white font-extrabold py-3.5 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95 text-center uppercase tracking-wide"
            >
              Submit Property Listing
            </button>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateListing;
