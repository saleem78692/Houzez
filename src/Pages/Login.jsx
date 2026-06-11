import React, { useState } from "react";
import { NavLink } from "react-router";
import { Home, Mail, Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import Footer from "../Componants/Footer";

const Login = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegisterMode) {
      alert(`Registration attempt for: ${name} (${email})`);
    } else {
      alert(`Login attempt for: ${email}`);
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col justify-between">
      <div>
        {/* Simple Top Navigation Breadcrumbs */}
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
            <span className="text-gray-600 font-semibold">
              {isRegisterMode ? "Register" : "Login"}
            </span>
          </div>
        </div>

        {/* Login Form Card Area */}
        <div className="max-w-md mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border border-gray-150 shadow-md p-6 sm:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                {isRegisterMode ? "Create Account" : "Sign In"}
              </h1>
              <p className="text-xs text-gray-400 font-semibold mt-1">
                {isRegisterMode
                  ? "Join Houzez directory listing portal today"
                  : "Enter credentials to access your dashboard"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-bold text-gray-450 uppercase mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                    />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-450 uppercase mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-450 uppercase mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00aeff]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {!isRegisterMode ? (
                <div className="flex items-center justify-between text-xs font-semibold">
                  <label className="flex items-center gap-1.5 text-gray-500 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#00aeff] focus:ring-[#00aeff]"
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Redirecting to reset password...")}
                    className="text-[#00aeff] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  <input
                    type="checkbox"
                    required
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    id="terms-checkbox"
                    className="rounded border-gray-300 text-[#00aeff] focus:ring-[#00aeff]"
                  />
                  <label htmlFor="terms-checkbox" className="text-gray-500 cursor-pointer">
                    I agree to the <NavLink to="/terms" className="text-[#00aeff] hover:underline">Terms & Policies</NavLink>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#00aeff] hover:bg-[#009ee6] text-white font-bold py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95 text-center mt-2"
              >
                {isRegisterMode ? "Sign Up" : "Sign In"}
              </button>
            </form>

            {/* Social Logins */}
            <div className="relative my-6 text-center">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b border-gray-100" />
              <span className="relative bg-white px-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Or Continue With
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => alert("Google login initialized...")}
                className="flex items-center justify-center gap-2 py-2 border border-gray-250 rounded-lg hover:bg-gray-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Google
              </button>
              <button
                onClick={() => alert("Facebook login initialized...")}
                className="flex items-center justify-center gap-2 py-2 border border-gray-250 rounded-lg hover:bg-gray-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Facebook
              </button>
            </div>

            {/* Switch Mode */}
            <div className="text-center text-xs font-semibold text-gray-500 mt-6 pt-4 border-t border-gray-50">
              {isRegisterMode ? (
                <span>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsRegisterMode(false)}
                    className="text-[#00aeff] hover:underline font-bold cursor-pointer"
                  >
                    Login here
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsRegisterMode(true)}
                    className="text-[#00aeff] hover:underline font-bold cursor-pointer"
                  >
                    Register here
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
