import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const products = [
  {
    id: 1,
    title: 'Fairy String Lights',
    store: 'Party Perfect Store',
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200',
    retailPrice: 299,
    retailOld: 399,
    wholesalePrice: 199,
    minWholesale: 10,
    stock: true,
  },
  {
    id: 2,
    title: 'Decor LED Curtain Lights',
    store: 'Celebration Hub',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200',
    retailPrice: 499,
    retailOld: 599,
    wholesalePrice: 349,
    minWholesale: 5,
    stock: true,
  },
]

const ProductCard = ({ product }) => {
  const [mode, setMode] = useState('retail')
  const [qty, setQty] = useState(1)
  const [inCart, setInCart] = useState(false)

  return (
    <div className="bg-[#faf8f2] rounded-[28px] border-2 border-[#3f6b54] overflow-hidden shadow-sm">

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold">Lighting</span>
        <img src={product.image} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-[#3f6b54]">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1">🏬 {product.store}</p>

        {/* Toggle */}
        <div className="mt-4 flex bg-[#ece7df] rounded-xl p-1">
          <button
            onClick={() => setMode('retail')}
            className={`flex-1 py-2 rounded-lg font-semibold ${mode === 'retail' ? 'bg-white shadow' : 'text-gray-500'}`}
          >
            Retail
          </button>
          <button
            onClick={() => setMode('wholesale')}
            className={`flex-1 py-2 rounded-lg font-semibold ${mode === 'wholesale' ? 'bg-white shadow' : 'text-gray-500'}`}
          >
            Wholesale
          </button>
        </div>

        {/* Price Box */}
        <div className="mt-4 bg-[#f4f1eb] rounded-xl p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold">Retail Price:</span>
            <div className="flex gap-2 items-center">
              <span className="text-xl font-bold text-[#3f6b54]">₹{product.retailPrice}</span>
              <span className="line-through text-gray-400">₹{product.retailOld}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3">
            <span className="font-semibold">Wholesale Price:</span>
            <div className="text-right">
              <div className="text-xl font-bold text-[#3f6b54]">₹{product.wholesalePrice}</div>
              <div className="text-xs text-gray-500">Min. {product.minWholesale} units</div>
            </div>
          </div>
        </div>

        {/* Stock */}
        <div className="mt-3 flex justify-between items-center">
          <span className="font-semibold text-[#3f6b54]">In Stock</span>
          <span className="bg-[#eacb8f] px-3 py-1 rounded-full text-sm font-medium">Save ₹{product.retailPrice - product.wholesalePrice} on bulk</span>
        </div>

        {/* Add to Cart / Quantity Switch */}
        <div className="mt-4 flex gap-3">

          {!inCart ? (
            <button
              onClick={() => {
                setInCart(true)
                setQty(1)
              }}
              className="flex-1 bg-[#3f6b54] text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              🛒 Add to Cart
            </button>
          ) : (
            <div className="flex-1 bg-[#ece7df] rounded-xl flex justify-between items-center px-4 py-2">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full border-2 border-[#3f6b54] text-xl"
              >
                -
              </button>

              <span className="text-xl font-semibold">{qty}</span>

              <button
                onClick={() => setQty(q => q + 1)}
                className="w-10 h-10 rounded-full bg-[#3f6b54] text-white text-xl"
              >
                +
              </button>
            </div>
          )}

          <button className="border-2 border-[#e2a53b] text-[#e2a53b] px-5 py-3 rounded-xl font-semibold">
            👁 View
          </button>
        </div>

      </div>
    </div>
  )
}

const Categories = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-pink-500 to-purple-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Lighting Products</h1>
        <p className="mt-2">Retail & Wholesale Products</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default Categories