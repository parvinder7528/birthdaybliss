import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-[40px]">
    <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
    <button className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-semibold cursor-pointer whitespace-nowrap">
      Clear Cart
    </button>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-4">
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-300 transition-all">
        <div className="flex gap-6">
          <a
            className="cursor-pointer"
            href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185569/product/1"
            data-discover="true"
          >
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
              <img
                alt="Happy Birthday Number Balloons Set"
                className="w-full h-full object-cover"
                src="https://readdy.ai/api/search-image?query=Premium%20happy%20birthday%20number%20balloons%20set%20featuring%20large%20metallic%20gold%20number%20balloons%20with%20coordinating%20pastel%20pink%20and%20white%20latex%20balloons%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20e-commerce%20product%20display&width=800&height=800&seq=product-number-balloons-1&orientation=squarish"
              />
            </div>
          </a>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <a
                  className="cursor-pointer"
                  href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185569/product/1"
                  data-discover="true"
                >
                  <h3 className="font-bold text-lg text-gray-900 hover:text-pink-500 transition-colors">
                    Happy Birthday Number Balloons Set
                  </h3>
                </a>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <i className="ri-store-line" />
                  Party Perfect Store
                </p>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-red-500 transition-colors cursor-pointer">
                <i className="ri-delete-bin-line text-xl" />
              </button>
            </div>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
                Retail Order
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer"
                //   disabled=""
                >
                  <i className="ri-subtract-line" />
                </button>
                <span className="w-12 text-center font-bold text-gray-900">
                  1
                </span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer">
                  <i className="ri-add-line" />
                </button>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-pink-500">$24.99</div>
                <div className="text-sm text-gray-500">$24.99 each</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:col-span-1">
      <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold text-gray-900">$24.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-semibold text-gray-900">$9.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Tax (8%):</span>
            <span className="font-semibold text-gray-900">$2.00</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-700">
              <i className="ri-information-line" /> Add $75.01 more for FREE
              shipping!
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pt-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">Total:</span>
            <span className="text-3xl font-bold text-pink-500">$36.98</span>
          </div>
        </div>
        <button className="w-full px-6 py-4 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all font-bold text-lg mb-3 cursor-pointer whitespace-nowrap">
          Proceed to Checkout
        </button>
        <a
          className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-all font-semibold text-center cursor-pointer whitespace-nowrap"
          href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185569"
          data-discover="true"
        >
          Continue Shopping
        </a>
        <div className="mt-6 pt-6 border-t border-gray-300">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-shield-check-line text-green-600" />
              </div>
              <span className="text-xs text-gray-600">Secure Payment</span>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-truck-line text-blue-600" />
              </div>
              <span className="text-xs text-gray-600">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Cart