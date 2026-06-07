import React, { useState } from 'react';
import { Sparkles, Check, User, Mail, Phone, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import bodyImage from '../assets/images/body-image.jpg';
import SearchProperty from '../Componants/SearchProperty';
import Slider from '../Componants/Slider';
import Residential from '../Componants/Residential';
import HouzezChoice from '../Componants/HouzezChoice';
import FinestProperty from '../Componants/FinestProperty';
import ExploreCity from '../Componants/ExploreCity';
import Agent from '../Componants/Agent';
import Testomonial from '../Componants/Testomonial';
import Footer from '../Componants/Footer';

function CaptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      tempErrors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
    }

    if (!formData.consent) {
      tempErrors.consent = "You must agree to proceed";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request submission to CRM
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <>
    <div 
      className="min-h-[calc(100vh-68px)] w-full flex items-center justify-center bg-cover bg-center relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: `url(${bodyImage})` }}
    >
      
      <div className="absolute inset-0 bg-[#1e3044]/90 backdrop-blur-[3px] z-0" />
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        <div className="flex flex-col justify-center space-y-6 text-white text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold w-max uppercase tracking-wider select-none">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-sky-400" />
            <span>Houzez CRM System</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
            Display Custom <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Leads Capture Forms</span> That Integrate With Houzez CRM
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            When one of your visitors fills out this form, the data is instantly stored in the Houzez CRM as a new lead, enabling seamless agent assignment and follow-ups.
          </p>

          <div className="border-t border-slate-500/20 pt-6">
            <ul className="space-y-4">
              {[
                "Instant synchronization with agent dashboard",
                "Automated email notifications & classification",
                "GDPR compliant lead processing",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-200 font-medium text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 sm:p-10 max-w-lg w-full transition-all duration-300 hover:shadow-sky-500/10">
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Form Submitted!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  Thank you, <strong className="text-slate-800 dark:text-white">{formData.name}</strong>. Your inquiry has been stored in Houzez CRM. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
                  }}
                  className="mt-6 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-left">Get In Touch</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-left leading-relaxed">
                  Fill out this form and one of our agents will be in touch with you soon
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="text-left">
                    <label htmlFor="name" className="block text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 text-sm text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800/50 border ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sky-500'
                        } rounded-lg focus:bg-white dark:focus:bg-slate-900 transition-all outline-none`}
                      />
                    </div>
                    {errors.name && <span className="text-xs text-red-500 mt-1.5 block">{errors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label htmlFor="email" className="block text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-sm text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800/50 border ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sky-500'
                          } rounded-lg focus:bg-white dark:focus:bg-slate-900 transition-all outline-none`}
                        />
                      </div>
                      {errors.email && <span className="text-xs text-red-500 mt-1.5 block">{errors.email}</span>}
                    </div>

                    <div className="text-left">
                      <label htmlFor="phone" className="block text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-sm text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800/50 border ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sky-500'
                          } rounded-lg focus:bg-white dark:focus:bg-slate-900 transition-all outline-none`}
                        />
                      </div>
                      {errors.phone && <span className="text-xs text-red-500 mt-1.5 block">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="text-left">
                    <label htmlFor="message" className="block text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-4 text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 text-sm text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800/50 border ${
                          errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-sky-500'
                        } rounded-lg focus:bg-white dark:focus:bg-slate-900 transition-all outline-none resize-none`}
                      />
                    </div>
                    {errors.message && <span className="text-xs text-red-500 mt-1.5 block">{errors.message}</span>}
                  </div>

                  <div className="flex items-start gap-3 pt-1 text-left">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 dark:border-slate-700 cursor-pointer"
                      />
                    </div>
                    <div className="text-xs">
                      <label htmlFor="consent" className="text-slate-600 dark:text-slate-400 cursor-pointer select-none leading-relaxed">
                        I consent to having this website store my submitted information
                      </label>
                      {errors.consent && <span className="text-xs text-red-500 mt-1 block">{errors.consent}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 bg-sky-500 hover:bg-sky-600 active:scale-[0.99] text-white text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    
    </div>
    <SearchProperty/>
    <Slider/>
    <Residential/>
    <HouzezChoice/>
    <FinestProperty/>
    <ExploreCity/>
    <Agent/>
    <Testomonial/>
    <Footer/>
    </>
  );
}

export default CaptionForm;