import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    title: "Birthday Balloons",
    img: "https://images.pexels.com/photos/2072153/pexels-photo-2072153.jpeg",
  },
  {
    title: "Decoration Balloons",
    img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
  },
  {
    title: "Ribbons & Streamers",
    img: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg",
  },
  {
    title: "Party Sprays & Confetti",
    img: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg",
  },
  {
    title: "Kids Birthday Decorations",
    img: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg",
  },
  {
    title: "Theme-Based Decorations",
    img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg",
  },
];

// ✅ Fixed Custom Arrows
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="ri-arrow-right-line text-2xl text-gray-800" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="ri-arrow-left-line text-2xl text-gray-800" />
    </button>
  );
};

const CategoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // One slide at a time
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Find the perfect decorations for your celebration
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {categories.map((cat, index) => (
              <div key={index} className="px-3">
                <a href="/categories" className="group block">
                  <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl">
                    {/* Image */}
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {cat.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold transition hover:bg-pink-600">
                        Explore Now →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
