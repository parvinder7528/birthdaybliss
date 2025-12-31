import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Cart = () => {
  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER (padding for fixed navbar) */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <button className="text-red-500 font-semibold hover:bg-red-50 px-4 py-2 rounded-lg w-fit">
              Clear Cart
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* IMAGE */}
                  <div className="w-full sm:w-32 h-48 sm:h-32 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=Premium%20happy%20birthday%20number%20balloons%20set%20featuring%20large%20metallic%20gold%20number%20balloons%20with%20coordinating%20pastel%20pink%20and%20white%20latex%20balloons%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20celebration%20theme%20perfect%20for%20e-commerce%20product%20display&width=600&height=600&seq=product-number-balloons-1&orientation=squarish"
                      alt="Happy Birthday Number Balloons"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          Happy Birthday Number Balloons Set
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <i className="ri-store-line" />
                          Party Perfect Store
                        </p>
                      </div>
                      <button className="text-red-500 hover:bg-red-50 w-8 h-8 rounded-full">
                        <i className="ri-delete-bin-line text-xl" />
                      </button>
                    </div>

                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
                      Retail Order
                    </span>

                    {/* QTY + PRICE */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 border-2 rounded-lg">
                          <i className="ri-subtract-line" />
                        </button>
                        <span className="w-10 text-center font-bold">1</span>
                        <button className="w-8 h-8 border-2 rounded-lg">
                          <i className="ri-add-line" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-pink-500">
                          $24.99
                        </div>
                        <div className="text-sm text-gray-500">
                          $24.99 each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 lg:sticky lg:top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">$24.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">$9.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">$2.00</span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700">
                    <i className="ri-information-line" /> Add $75.01 more for
                    FREE shipping!
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-bold text-pink-500">
                      $36.98
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold text-lg mb-3">
                  Proceed to Checkout
                </button>

                <a className="block text-center py-3 border-2 rounded-xl font-semibold">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
