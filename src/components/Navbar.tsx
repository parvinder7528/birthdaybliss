import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const navigate = useNavigate();

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when modal/menu open
  useEffect(() => {
    document.body.style.overflow =
      openSearch || openMobileMenu ? "hidden" : "auto";
  }, [openSearch, openMobileMenu]);

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
            {/* LOGO */}
            <a href="/" className="flex items-center space-x-3">
              <img
                src="https://public.readdy.ai/ai/img_res/f31cecbf-c08d-442c-9542-528b594ca3f1.png"
                alt="Birthday Bliss"
                className="h-12 w-12 object-contain"
              />
              <span
                className={`text-2xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Birthday Bliss
              </span>
            </a>

            {/* DESKTOP MENU */}
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

            {/* DESKTOP RIGHT ICONS */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setOpenSearch(true)}
                className="p-2 hover:bg-pink-50 rounded-full"
              >
                <i
                  className={`ri-search-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              {/* Wishlist */}
              <button className="p-2 hover:bg-pink-50 rounded-full">
                <i
                  className={`ri-heart-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              {/* Cart */}
              <button
                onClick={() => navigate("/cart-detail")}
                className="p-2 hover:bg-pink-50 rounded-full"
              >
                <i
                  className={`ri-shopping-cart-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              {/* Sign In */}
              <a
                href="/sign-in"
                className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-sm font-medium"
              >
                Sign In
              </a>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpenMobileMenu(true)}
            >
              <i
                className={`ri-menu-line text-2xl ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <div
          className="fixed inset-0 z-[100] bg-black/50"
          onClick={() => setOpenMobileMenu(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Birthday Bliss
              </h2>
              <button
                onClick={() => setOpenMobileMenu(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <i className="ri-close-line text-2xl text-gray-700" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-4">
              {["Home", "Categories", "Become a Seller"].map((item) => (
                <button
                  key={item}
                  className="text-left text-lg font-medium text-gray-800 hover:text-pink-500"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="my-6 border-t" />

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setOpenMobileMenu(false);
                  setOpenSearch(true);
                }}
                className="p-3 rounded-full bg-gray-100"
              >
                <i className="ri-search-line text-xl text-gray-700" />
              </button>

              <button
                onClick={() => {
                  setOpenMobileMenu(false);
                  navigate("/cart-detail");
                }}
                className="p-3 rounded-full bg-gray-100"
              >
                <i className="ri-shopping-cart-line text-xl text-gray-700" />
              </button>
            </div>

            {/* Sign In */}
            <a
              href="/sign-in"
              className="block mt-6 text-center px-5 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-sm font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
      )}

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

            <div className="relative">
              <input
                type="text"
                placeholder="Search for birthday decorations..."
                className="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-pink-500 text-white rounded-lg hover:bg-pink-600 flex items-center justify-center">
                <i className="ri-search-line text-xl" />
              </button>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">
                Popular Searches:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Birthday Balloons",
                  "LED Lights",
                  "Party Sprays",
                  "Ribbons",
                ].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-pink-100 hover:text-pink-600 text-sm"
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
