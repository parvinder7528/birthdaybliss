import { useMemo, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Happy Birthday Number Balloons Set",
    price: 24.99,
    rating: 4.6,
    store: "Party Perfect Store",
    image:
      "https://readdy.ai/api/search-image?query=happy%20birthday%20number%20balloons&width=600&height=600",
  },
  {
    id: 2,
    name: "Metallic Rose Gold Birthday Balloons",
    price: 18.99,
    rating: 4.2,
    store: "Celebration Hub",
    image:
      "https://readdy.ai/api/search-image?query=rose%20gold%20birthday%20balloons&width=600&height=600",
  },
  {
    id: 3,
    name: "Confetti Birthday Balloons Pack",
    price: 16.99,
    rating: 4.8,
    store: "Balloon Boutique",
    image:
      "https://readdy.ai/api/search-image?query=confetti%20birthday%20balloons&width=600&height=600",
  },
  {
    id: 4,
    name: "Giant Happy Birthday Letter Balloons",
    price: 32.99,
    rating: 4.5,
    store: "Party Perfect Store",
    image:
      "https://readdy.ai/api/search-image?query=happy%20birthday%20letter%20balloons&width=600&height=600",
  },
  {
    id: 5,
    name: "Pastel Rainbow Birthday Balloons",
    price: 21.99,
    rating: 4.4,
    store: "Celebration Hub",
    image:
      "https://readdy.ai/api/search-image?query=pastel%20rainbow%20birthday%20balloons&width=600&height=600",
  },
  {
    id: 6,
    name: "Chrome Silver Birthday Balloons",
    price: 19.99,
    rating: 4.1,
    store: "Balloon Boutique",
    image:
      "https://readdy.ai/api/search-image?query=chrome%20silver%20birthday%20balloons&width=600&height=600",
  },
];

export default function ProductsWithFilter() {
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (priceFilter === "under-20") list = list.filter(p => p.price < 20);
    if (priceFilter === "20-40") list = list.filter(p => p.price >= 20 && p.price <= 40);
    if (priceFilter === "over-40") list = list.filter(p => p.price > 40);

    if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [priceFilter, sortBy]);

  // 3D hover handler
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = -((y / rect.height) - 0.5) * 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const resetTransform = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b">
        <div className="flex items-center gap-2 text-gray-600">
          <i className="ri-shopping-bag-line text-xl" />
          <span className="font-semibold">
            {filteredProducts.length} Products
          </span>
        </div>

        <div className="flex gap-4">
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Prices</option>
            <option value="under-20">Under $20</option>
            <option value="20-40">$20 - $40</option>
            <option value="over-40">Over $40</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            className="bg-white rounded-2xl border transition-transform duration-200 will-change-transform"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.store}</p>

              <div className="flex justify-between items-center my-3">
                <span className="text-xl font-bold text-pink-500">${p.price}</span>
                <span className="text-sm">⭐ {p.rating}</span>
              </div>

              <a
                href="/cart-detail"
                className="block text-center bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600"
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
