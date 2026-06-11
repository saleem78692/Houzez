import React, { useState } from "react";
import KeywordSearch from "../Componants/KeywordSearch";
import { NavLink } from "react-router";
import { Home, Calculator, DollarSign, Percent, Calendar } from "lucide-react";
import Footer from "../Componants/Footer";

const MortgageCalc = () => {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate monthly mortgage payments
  const loanAmount = homePrice - downPayment;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyInterestRate > 0) {
    monthlyPayment = 
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    monthlyPayment = loanAmount / numberOfPayments;
  }

  const totalCost = monthlyPayment * numberOfPayments;
  const totalInterest = totalCost - loanAmount;

  // Percentage shares for visual bar graph
  const principalPercent = (loanAmount / totalCost) * 100;
  const interestPercent = (totalInterest / totalCost) * 100;

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        <KeywordSearch />

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

            <span className="text-gray-600 font-semibold">Mortgage Calculator</span>
          </div>
        </div>

        {/* Main calculation interface */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 flex items-center gap-3">
              <Calculator className="text-[#00aeff]" />
              <span>Mortgage Calculator</span>
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Estimate your monthly payments and analyze principal and interest distributions.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input sliders - left side (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6">
              
              {/* Home Price Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Home Price</label>
                  <span className="text-lg font-extrabold text-slate-800">${homePrice.toLocaleString()}</span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400 font-semibold">$</span>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700 mb-2"
                  />
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-150 rounded-lg appearance-none cursor-pointer accent-[#00aeff]"
                />
              </div>

              {/* Down Payment Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Down Payment</label>
                  <span className="text-lg font-extrabold text-slate-800">
                    ${downPayment.toLocaleString()} ({((downPayment / homePrice) * 100 || 0).toFixed(1)}%)
                  </span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400 font-semibold">$</span>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700 mb-2"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max={homePrice}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-150 rounded-lg appearance-none cursor-pointer accent-[#00aeff]"
                />
              </div>

              {/* Interest Rate & Term Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Interest rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase">Interest Rate (%)</label>
                    <span className="text-base font-bold text-slate-800">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-gray-150 rounded-lg appearance-none cursor-pointer accent-[#00aeff]"
                  />
                </div>

                {/* Term Years */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase">Loan Term (Years)</label>
                    <span className="text-base font-bold text-slate-800">{loanTerm} Years</span>
                  </div>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                    className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-[#00aeff] font-semibold text-slate-700"
                  >
                    <option value={15}>15 Years (Fixed)</option>
                    <option value={20}>20 Years (Fixed)</option>
                    <option value={30}>30 Years (Fixed)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Calculations results - right side (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
              
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Estimated Payment</h3>
                <div className="text-5xl font-black text-slate-850">
                  ${Math.round(monthlyPayment).toLocaleString()}
                  <span className="text-lg font-bold text-gray-400"> / mo</span>
                </div>
                
                {/* Visual distribution split bar */}
                <div className="mt-8">
                  <div className="text-xs font-bold text-slate-700 mb-2">Payment Distribution Breakdown</div>
                  <div className="w-full h-3 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-[#00aeff]" 
                      style={{ width: `${principalPercent}%` }}
                      title={`Principal: ${principalPercent.toFixed(1)}%`}
                    />
                    <div 
                      className="h-full bg-[#69c017]" 
                      style={{ width: `${interestPercent}%` }}
                      title={`Interest: ${interestPercent.toFixed(1)}%`}
                    />
                  </div>
                </div>

                {/* Summary Table */}
                <div className="mt-8 space-y-3.5 border-t border-gray-100 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 font-semibold text-gray-550">
                      <span className="w-3 h-3 rounded-full bg-[#00aeff]"></span> Principal Loan Amount:
                    </span>
                    <span className="font-extrabold text-slate-750">${loanAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 font-semibold text-gray-550">
                      <span className="w-3 h-3 rounded-full bg-[#69c017]"></span> Total Interest Payable:
                    </span>
                    <span className="font-extrabold text-slate-750">${Math.round(totalInterest).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-sm border-t border-gray-50 pt-3.5">
                    <span className="font-bold text-slate-700">Total Overall Cost:</span>
                    <span className="font-black text-slate-800">${Math.round(totalCost).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Get agent contact suggestion banner */}
              <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between">
                <div className="pr-4">
                  <div className="text-xs font-bold text-slate-700">Need financial advice?</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Let our specialist lenders help you.</div>
                </div>
                <NavLink
                  to="/contact-agent"
                  className="bg-[#00aeff] hover:bg-[#009ee6] text-white text-[11px] font-bold px-3 py-2 rounded transition-all active:scale-95 whitespace-nowrap shadow-xs"
                >
                  Contact Agent
                </NavLink>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MortgageCalc;
