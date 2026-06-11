import React from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Calendar, User, ArrowRight } from "lucide-react";
import Footer from "../Componants/Footer";

const blogPostsData = [
  {
    id: 1,
    title: "Buying vs. Renting: Which is Right for You in 2026?",
    excerpt: "Analyze the long-term equity projections, tax advantages, and flexibility trade-offs to make the right real estate decision.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    date: "June 10, 2026",
    author: "Samuel Palmer"
  },
  {
    id: 2,
    title: "10 Easy Home Staging Tips to Sell Your Property Fast",
    excerpt: "First impressions are vital. Discover simple kitchen decluttering and ambient lighting methods that increase premium sale bids.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    date: "May 28, 2026",
    author: "Michelle Ramirez"
  },
  {
    id: 3,
    title: "Understanding Mortgage Rates and Lenders' Criteria",
    excerpt: "Demystify home loan applications. Learn how debt-to-income limits and down payments affect your approved interest rates.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2026",
    author: "John Doe"
  }
];

const Blog = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        {/* <KeywordSearch /> */}

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <Home size={16} />
              <span>Home</span>
            </NavLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-semibold">Blog</span>
          </div>
        </div>

        {/* Blog listings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Houzez Real Estate Blog
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Educational guides, market trends, and staging tips curated by our premier team.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPostsData.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} /> By {post.author}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-base sm:text-lg hover:text-[#00aeff] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold mt-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => alert("Reading article details page...")}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#00aeff] hover:text-[#009ee6] cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
