import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Detect decoration route
  const isDecorationRoute = location.pathname === "/decoration";

  // Menu logic
  const menuItems = isDecorationRoute
    ? [
        { name: "Home", path: "/" },
        { name: "Decoration", path: "/decoration" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "Decoration", path: "/decoration" },
      ];

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow =
      openSearch || openMobileMenu ? "hidden" : "auto";
  }, [openSearch, openMobileMenu]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-3"
            >
              <img
                src="https://public.readdy.ai/ai/img_res/f31cecbf-c08d-442c-9542-528b594ca3f1.png"
                alt="Birthday Bliss"
                className="h-12 w-12"
              />
              <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Birthday Bliss
              </span>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-medium hover:text-pink-500
                  ${scrolled ? "text-gray-700" : "text-white"}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* RIGHT ICONS */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setOpenSearch(true)}
                className="p-2 rounded-full hover:bg-pink-50"
              >
                <i
                  className={`ri-search-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              <button
                onClick={() => navigate("/cart-detail")}
                className="p-2 rounded-full hover:bg-pink-50"
              >
                <i
                  className={`ri-shopping-cart-line text-xl ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                />
              </button>

              <button
                onClick={() => navigate("/sign-in")}
                className="px-5 py-2 bg-pink-500 text-white rounded-full"
              >
                Sign In
              </button>
            </div>

            {/* MOBILE MENU ICON */}
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
            className="absolute right-0 top-0 h-full w-[80%] bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">Birthday Bliss</h2>
              <button onClick={() => setOpenMobileMenu(false)}>
                <i className="ri-close-line text-2xl" />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpenMobileMenu(false);
                  }}
                  className="text-lg text-left font-medium hover:text-pink-500"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
