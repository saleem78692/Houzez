import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Footer from "../Componants/Footer";

const faqData = [
  {
    question: "How do I list my property on Houzez?",
    answer: "To list a property, click on the 'Add Listing' portal in the header menu. Create an account, input key structural details (location, price, area, bedroom counts), upload high-quality photographs, and submit for verification. Our review team verifies legal credentials before publishing listings."
  },
  {
    question: "Are there any listing fees?",
    answer: "Standard accounts include up to 3 active property listings free of charge. For agencies and developers with larger portfolios, we offer premium subscription tiers that unlock features like 'Featured' badge promotions and advanced leads integration."
  },
  {
    question: "How do I contact listing agents?",
    answer: "You can click on the 'Details' button on any property card to view the property detail page. On the right column of the detail page, you will find direct phone/email contact options and an inquiry submission form to connect with the designated listing agent."
  },
  {
    question: "How does the mortgage calculator work?",
    answer: "Our Mortgage Calculator calculates estimated monthly payments based on the formula: Loan Amount * Monthly Interest Rate / (1 - (1 + Monthly Interest Rate)^-n). Adjust variables like Home Price, Down Payment, and interest percentages to see real-time payment breakdowns."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <span className="text-gray-600 font-semibold">FAQ</span>
          </div>
        </div>

        {/* FAQ list */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8 text-center">
            <HelpCircle size={40} className="text-[#00aeff] mx-auto mb-3" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Find quick, automated answers to common questions about accounts, listing verification, and billing.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 flex items-center justify-between text-left font-bold text-slate-800 text-sm sm:text-base hover:bg-gray-50/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#00aeff]" /> : <ChevronDown size={18} className="text-gray-400" />}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-xs sm:text-sm text-gray-550 leading-relaxed font-semibold">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
