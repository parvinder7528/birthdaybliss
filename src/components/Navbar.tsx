import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = openSearch ? "hidden" : "auto";
  }, [openSearch]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a className="flex items-center space-x-3 cursor-pointer" href="/">
              <img
                alt="Birthday Bliss Logo"
                className="h-12 w-12 object-contain"
                src="https://public.readdy.ai/ai/img_res/f31cecbf-c08d-442c-9542-528b594ca3f1.png"
              />
              <span
                className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Birthday Bliss
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Categories", "Become a Seller"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors hover:text-pink-500
                    ${scrolled ? "text-gray-700" : "text-white"}
                  `}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* SEARCH ICON */}
              <button
                onClick={() => setOpenSearch(true)}
                className="relative p-2 hover:bg-pink-50 rounded-full transition-colors"
              >
                <i
                  className={`ri-search-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              {["heart", "shopping-cart"].map((icon) => (
                <button
                  key={icon}
                  onClick={() => {
                    if (icon === "shopping-cart") {
                      navigate("/cart-detail");
                    }
                  }}
                  className="relative p-2 hover:bg-pink-50 rounded-full transition-colors"
                >
                  <i
                    className={`ri-${icon}-line text-xl ${
                      scrolled ? "text-gray-700" : "text-white"
                    }`}
                  />
                </button>
              ))}

              <a
                href="/login"
                className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-sm font-medium"
              >
                Sign In
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <i
                className={`ri-menu-line text-2xl ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* SEARCH MODAL */}
      {openSearch && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-4"
          onClick={() => setOpenSearch(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Search Products
              </h3>
              <button
                onClick={() => setOpenSearch(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <i className="ri-close-line text-2xl text-gray-600" />
              </button>
            </div>

            <form>
              <div className="relative">
                <input
                  placeholder="Search for birthday decorations..."
                  className="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
                  type="text"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center justify-center"
                >
                  <i className="ri-search-line text-xl" />
                </button>
              </div>
            </form>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Birthday Balloons",
                  "LED Lights",
                  "Party Sprays",
                  "Ribbons",
                ].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
