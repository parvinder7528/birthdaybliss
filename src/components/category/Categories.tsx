import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Categories = () => {
  return (
<>
<Navbar/>
<div className="bg-gradient-to-r from-pink-500 to-purple-500 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Birthday Balloons
    </h1>
    <p className="text-lg text-white/90 max-w-2xl mx-auto">
      Premium quality birthday balloons in all colors, sizes, and designs
    </p>
  </div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
    <div className="flex items-center gap-2 text-gray-600">
      <i className="ri-shopping-bag-line text-xl" />
      <span className="font-semibold">6 Products</span>
    </div>
    <div className="flex flex-wrap gap-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer">
        <option value="all">All Prices</option>
        <option value="under-20">Under $20</option>
        <option value="20-40">$20 - $40</option>
        <option value="over-40">Over $40</option>
      </select>
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer">
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="/categories-view"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Happy Birthday Number Balloons Set"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Premium%20happy%20birthday%20number%20balloons%20set%20featuring%20large%20metallic%20gold%20number%20balloons%20with%20coordinating%20pastel%20pink%20and%20white%20latex%20balloons%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20e-commerce%20product%20display&width=600&height=600&seq=product-number-balloons-1&orientation=squarish"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-bold">
            Save $10.00
          </div>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="/categories-view"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Happy Birthday Number Balloons Set
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Party Perfect Store
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$24.99</span>
              <span className="text-sm text-gray-400 line-through">$34.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$18.99</span>
              <span className="text-xs text-gray-500">Min. 10 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $6.00 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="/categories-view"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Metallic Rose Gold Birthday Balloons"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=600&height=600&seq=product-rose-gold-balloons-2&orientation=squarish"
          />
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="/categories-view"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Metallic Rose Gold Birthday Balloons
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Celebration Hub
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$18.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$14.99</span>
              <span className="text-xs text-gray-500">Min. 15 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $4.00 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="//categories-view/3"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Confetti Birthday Balloons Pack"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Transparent%20confetti%20birthday%20balloons%20filled%20with%20colorful%20metallic%20confetti%20in%20gold%20silver%20pink%20and%20blue%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20party%20theme%20perfect%20for%20e-commerce%20display&width=600&height=600&seq=product-confetti-balloons-3&orientation=squarish"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-bold">
            Save $6.00
          </div>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="//categories-view/3"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Confetti Birthday Balloons Pack
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Balloon Boutique
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$16.99</span>
              <span className="text-sm text-gray-400 line-through">$22.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$12.99</span>
              <span className="text-xs text-gray-500">Min. 20 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $4.00 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="//categories-view/3"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="//categories-view/3"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="/categories-view"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Giant Happy Birthday Letter Balloons"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Giant%20happy%20birthday%20letter%20balloons%20in%20metallic%20gold%20spelling%20out%20HAPPY%20BIRTHDAY%20large%20foil%20letter%20balloons%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20listing&width=600&height=600&seq=product-letter-balloons-4&orientation=squarish"
          />
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="/categories-view"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Giant Happy Birthday Letter Balloons
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Party Perfect Store
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$32.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$24.99</span>
              <span className="text-xs text-gray-500">Min. 8 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $8.00 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="//categories-view"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Pastel Rainbow Birthday Balloons"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Pastel%20rainbow%20birthday%20balloons%20set%20featuring%20soft%20pink%20lavender%20mint%20yellow%20peach%20balloons%20in%20various%20sizes%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20e-commerce&width=600&height=600&seq=product-pastel-balloons-5&orientation=squarish"
          />
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="/categories-view"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Pastel Rainbow Birthday Balloons
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Celebration Hub
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$21.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$16.99</span>
              <span className="text-xs text-gray-500">Min. 12 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $5.00 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-pink-300 hover:shadow-xl transition-all group">
      <a
        className="block cursor-pointer"
        href="/categories-view"
        data-discover="true"
      >
        <div className="relative w-full h-64 overflow-hidden bg-gray-50">
          <img
            alt="Chrome Silver Birthday Balloons"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            src="https://readdy.ai/api/search-image?query=Chrome%20silver%20metallic%20birthday%20balloons%20with%20mirror%20finish%20reflecting%20light%20beautifully%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20modern%20celebration%20theme%20perfect%20for%20product%20display&width=600&height=600&seq=product-chrome-balloons-6&orientation=squarish"
          />
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-heart-line text-xl text-pink-500" />
          </button>
        </div>
      </a>
      <div className="p-5">
        <a
          className="cursor-pointer"
          href="/categories-view"
          data-discover="true"
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
            Chrome Silver Birthday Balloons
          </h3>
        </a>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <i className="ri-store-line" />
          Balloon Boutique
        </p>
        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Retail Price:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-pink-500">$19.99</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Wholesale Price:
            </span>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold text-green-600">$15.49</span>
              <span className="text-xs text-gray-500">Min. 15 units</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-500">In Stock</span>
          <span className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">
            Save $4.50 on bulk
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            className="flex-1 px-4 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            <i className="ri-shopping-cart-line" />
            Add to Cart
          </a>
          <a
            className="px-4 py-2.5 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold text-sm whitespace-nowrap cursor-pointer"
            href="/categories-view"
            data-discover="true"
          >
            View
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Categories