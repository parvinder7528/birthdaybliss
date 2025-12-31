import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

const handleSignIn = () => {
  navigate("/sign-in");
};
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  alt="Birthday Bliss"
                  className="w-12 h-12 object-contain"
                  src="https://public.readdy.ai/ai/img_res/f31cecbf-c08d-442c-9542-528b594ca3f1.png"
                />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Join Birthday Bliss
              </h1>
              <p className="text-white/90">Create your account today</p>
            </div>
            <div className="p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <i className="ri-user-line text-xl" />
                    </div>
                    <input
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      // required=""
                      type="text"
                      defaultValue=""
                      name="name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <i className="ri-mail-line text-xl" />
                    </div>
                    <input
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      // required=""
                      type="email"
                      defaultValue=""
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <i className="ri-lock-line text-xl" />
                    </div>
                    <input
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      // required=""
                      type="password"
                      defaultValue=""
                      name="password"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <i className="ri-lock-line text-xl" />
                    </div>
                    <input
                      placeholder="Confirm your password"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      // required=""
                      type="password"
                      defaultValue=""
                      name="confirmPassword"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all font-bold text-lg shadow-lg cursor-pointer whitespace-nowrap"
                >
                  Create Account
                </button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                  <i className="ri-google-fill text-xl text-red-500" />
                  Google
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                  <i className="ri-facebook-fill text-xl text-blue-600" />
                  Facebook
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={handleSignIn}
                    className="text-pink-500 hover:text-pink-600 font-bold cursor-pointer whitespace-nowrap"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <a
                className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer whitespace-nowrap"
                href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185569/terms"
                data-discover="true"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer whitespace-nowrap"
                href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185569/privacy"
                data-discover="true"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
