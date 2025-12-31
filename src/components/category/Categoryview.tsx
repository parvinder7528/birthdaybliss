import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Categoryview = () => {
  return (
  <>
  {/* <Navbar/> */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
    <a
      className="hover:text-pink-500 cursor-pointer"
      href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289"
      data-discover="true"
    >
      Home
    </a>
    <i className="ri-arrow-right-s-line" />
    <a
      className="hover:text-pink-500 cursor-pointer"
      href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories/birthday-balloons"
      data-discover="true"
    >
      Birthday Balloons
    </a>
    <i className="ri-arrow-right-s-line" />
    <span className="text-gray-900">Metallic Rose Gold Birthday Balloons</span>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-50 mb-4">
        <img
          alt="Metallic Rose Gold Birthday Balloons"
          className="w-full h-full object-cover"
          src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=800&height=800&seq=product-rose-gold-balloons-2&orientation=squarish"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button className="w-full h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer border-pink-500">
          <img
            alt="Metallic Rose Gold Birthday Balloons 1"
            className="w-full h-full object-cover"
            src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=800&height=800&seq=product-rose-gold-balloons-2&orientation=squarish"
          />
        </button>
        <button className="w-full h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer border-gray-200 hover:border-pink-300">
          <img
            alt="Metallic Rose Gold Birthday Balloons 2"
            className="w-full h-full object-cover"
            src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=800&height=800&seq=product-rose-gold-balloons-2&orientation=squarish"
          />
        </button>
        <button className="w-full h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer border-gray-200 hover:border-pink-300">
          <img
            alt="Metallic Rose Gold Birthday Balloons 3"
            className="w-full h-full object-cover"
            src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=800&height=800&seq=product-rose-gold-balloons-2&orientation=squarish"
          />
        </button>
        <button className="w-full h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer border-gray-200 hover:border-pink-300">
          <img
            alt="Metallic Rose Gold Birthday Balloons 4"
            className="w-full h-full object-cover"
            src="https://readdy.ai/api/search-image?query=Beautiful%20metallic%20rose%20gold%20birthday%20balloons%20collection%20including%20round%20balloons%20star%20balloons%20heart%20balloons%20floating%20elegantly%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20product%20showcase&width=800&height=800&seq=product-rose-gold-balloons-2&orientation=squarish"
          />
        </button>
      </div>
    </div>
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Metallic Rose Gold Birthday Balloons
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <i className="ri-star-fill text-yellow-400 text-lg" />
          <span className="font-semibold text-gray-900">4.9</span>
          <span className="text-gray-600">(203 reviews)</span>
        </div>
        <div className="w-px h-5 bg-gray-300" />
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          Birthday Balloons
        </span>
      </div>
      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-4xl font-bold text-pink-500">$18.99</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600">Wholesale Price:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600">
                  $14.99
                </span>
                <span className="text-sm text-gray-500">(Min. 15 units)</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-600">Save on bulk:</span>
              <div className="text-lg font-bold text-green-600">$4.00/unit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Order Type:
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 rounded-xl border-2 transition-all cursor-pointer border-pink-500 bg-pink-50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">Retail</span>
              <i className="ri-shopping-bag-line text-xl text-pink-500" />
            </div>
            <div className="text-2xl font-bold text-pink-500">$18.99</div>
          </button>
          <button className="p-4 rounded-xl border-2 transition-all cursor-pointer border-gray-200 hover:border-green-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">Wholesale</span>
              <i className="ri-stack-line text-xl text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-green-600">$14.99</div>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Quantity:
        </label>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-subtract-line text-xl" />
          </button>
          <input
            min={1}
            className="w-24 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="number"
            defaultValue={1}
          />
          <button className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer">
            <i className="ri-add-line text-xl" />
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Unit Price:</span>
          <span className="font-semibold">$18.99</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Quantity:</span>
          <span className="font-semibold">1</span>
        </div>
        <div className="border-t border-gray-300 pt-2 mt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-3xl font-bold text-pink-500">$18.99</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mb-6">
        <button className="flex-1 px-6 py-4 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all font-semibold text-lg flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
          <i className="ri-shopping-cart-line text-xl" />
          Add to Cart
        </button>
        <button className="px-6 py-4 border-2 border-pink-500 text-pink-500 rounded-xl hover:bg-pink-50 transition-all font-semibold whitespace-nowrap cursor-pointer">
          Buy Now
        </button>
        <button className="w-14 h-14 flex items-center justify-center border-2 rounded-xl transition-all cursor-pointer border-gray-300 hover:border-pink-500 hover:bg-pink-50">
          <i className="text-2xl ri-heart-line" />
        </button>
        <button className="w-14 h-14 flex items-center justify-center border-2 border-gray-300 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer">
          <i className="ri-share-line text-2xl" />
        </button>
      </div>
      <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <i className="ri-store-2-line text-2xl text-pink-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Celebration Hub</h3>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <i className="ri-star-fill text-yellow-400" />
                  <span>4.8</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">1890 sales</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-all font-semibold whitespace-nowrap cursor-pointer">
            Visit Store
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-shield-check-line text-pink-500" />
            </div>
            <span className="text-xs text-gray-600">Verified Seller</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-truck-line text-green-600" />
            </div>
            <span className="text-xs text-gray-600">Fast Shipping</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-customer-service-line text-blue-600" />
            </div>
            <span className="text-xs text-gray-600">24/7 Support</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-green-600 font-semibold">
        <i className="ri-checkbox-circle-line text-xl" />
        In Stock - Ready to Ship
      </div>
    </div>
  </div>
  <div className="mt-12">
    <div className="border-b border-gray-200 mb-6">
      <div className="flex gap-8">
        <button className="pb-4 border-b-2 border-pink-500 text-pink-500 font-semibold cursor-pointer">
          Description
        </button>
        <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-pink-500 font-semibold cursor-pointer">
          Specifications
        </button>
        <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-pink-500 font-semibold cursor-pointer">
          Reviews (203)
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Product Description
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Elevate your birthday party with our stunning metallic rose gold
          balloon collection. This elegant set includes round, star, and
          heart-shaped balloons that create a sophisticated and Instagram-worthy
          celebration atmosphere.
        </p>
        <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Mix of round, star, and heart-shaped balloons</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Stunning metallic rose gold finish</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Premium quality foil material</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Holds helium for 5-7 days</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Perfect for elegant celebrations</span>
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <i className="ri-check-line text-green-500 mt-1" />
            <span>Reusable with proper care</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
        <div className="bg-gray-50 rounded-xl p-6">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200 last:border-0">
                <td className="py-3 font-semibold text-gray-700 capitalize">
                  material:
                </td>
                <td className="py-3 text-gray-600">Premium Metallic Foil</td>
              </tr>
              <tr className="border-b border-gray-200 last:border-0">
                <td className="py-3 font-semibold text-gray-700 capitalize">
                  size:
                </td>
                <td className="py-3 text-gray-600">
                  Round: 18 inches, Stars/Hearts: 20 inches
                </td>
              </tr>
              <tr className="border-b border-gray-200 last:border-0">
                <td className="py-3 font-semibold text-gray-700 capitalize">
                  color:
                </td>
                <td className="py-3 text-gray-600">Rose Gold</td>
              </tr>
              <tr className="border-b border-gray-200 last:border-0">
                <td className="py-3 font-semibold text-gray-700 capitalize">
                  quantity:
                </td>
                <td className="py-3 text-gray-600">
                  15 balloons (5 round, 5 stars, 5 hearts)
                </td>
              </tr>
              <tr className="border-b border-gray-200 last:border-0">
                <td className="py-3 font-semibold text-gray-700 capitalize">
                  weight:
                </td>
                <td className="py-3 text-gray-600">0.6 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
  </>
  )
}

export default Categoryview