import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Eye } from 'lucide-react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import heroImage from "../../assets/decoration-hero.jpg";

type Product = {
  id: string;
  name: string;
  category: string;
  storeName: string;
  image: string;
  retailPrice: number;
  retailOriginalPrice: number;
  wholesalePrice: number;
  wholesaleMinUnits: number;
  inStock: boolean;
  bulkSavings: number;
};

export const disposalProducts: Product[] = [
  {
    id: 'd1',
    name: 'Premium Paper Plates (50 pcs)',
    category: 'Plates',
    storeName: 'Party Perfect Store',
    image: '/images/paper-plates.jpg',
    retailPrice: 299,
    retailOriginalPrice: 399,
    wholesalePrice: 199,
    wholesaleMinUnits: 10,
    inStock: true,
    bulkSavings: 100,
  },
  {
    id: 'd2',
    name: 'Party Paper Cups (100 pcs)',
    category: 'Cups',
    storeName: 'Party Perfect Store',
    image: '/images/paper-cups.jpg',
    retailPrice: 149,
    retailOriginalPrice: 199,
    wholesalePrice: 99,
    wholesaleMinUnits: 20,
    inStock: true,
    bulkSavings: 50,
  },
  {
    id: 'd3',
    name: 'Festive Napkins Set (200 pcs)',
    category: 'Napkins',
    storeName: 'Celebration Hub',
    image: '/images/napkins.jpg',
    retailPrice: 129,
    retailOriginalPrice: 179,
    wholesalePrice: 79,
    wholesaleMinUnits: 25,
    inStock: true,
    bulkSavings: 50,
  },
  {
    id: 'd4',
    name: 'Wooden Cutlery Set (150 pcs)',
    category: 'Cutlery',
    storeName: 'Party Perfect Store',
    image: '/images/cutlery.jpg',
    retailPrice: 249,
    retailOriginalPrice: 349,
    wholesalePrice: 169,
    wholesaleMinUnits: 15,
    inStock: true,
    bulkSavings: 80,
  },
  {
    id: 'd5',
    name: 'Paper Straws Rainbow (100 pcs)',
    category: 'Straws',
    storeName: 'Celebration Hub',
    image: '/images/straws.jpg',
    retailPrice: 99,
    retailOriginalPrice: 149,
    wholesalePrice: 59,
    wholesaleMinUnits: 30,
    inStock: true,
    bulkSavings: 40,
  },
  {
    id: 'd6',
    name: 'Cake Boxes (25 pcs)',
    category: 'Boxes',
    storeName: 'Party Perfect Store',
    image: '/images/cake-boxes.jpg',
    retailPrice: 299,
    retailOriginalPrice: 399,
    wholesalePrice: 199,
    wholesaleMinUnits: 10,
    inStock: true,
    bulkSavings: 100,
  },
  {
    id: 'd7',
    name: 'Food Trays Gold (30 pcs)',
    category: 'Trays',
    storeName: 'Celebration Hub',
    image: '/images/food-trays.jpg',
    retailPrice: 179,
    retailOriginalPrice: 249,
    wholesalePrice: 119,
    wholesaleMinUnits: 15,
    inStock: true,
    bulkSavings: 60,
  },
  {
    id: 'd8',
    name: 'Party Bowls Set (50 pcs)',
    category: 'Bowls',
    storeName: 'Party Perfect Store',
    image: '/images/bowls.jpg',
    retailPrice: 159,
    retailOriginalPrice: 219,
    wholesalePrice: 109,
    wholesaleMinUnits: 20,
    inStock: true,
    bulkSavings: 50,
  },
  {
    id: 'd9',
    name: 'Dessert Cups Clear (75 pcs)',
    category: 'Cups',
    storeName: 'Celebration Hub',
    image: '/images/dessert-cups.jpg',
    retailPrice: 189,
    retailOriginalPrice: 269,
    wholesalePrice: 129,
    wholesaleMinUnits: 15,
    inStock: true,
    bulkSavings: 60,
  },
  {
    id: 'd10',
    name: 'Popcorn Boxes (40 pcs)',
    category: 'Boxes',
    storeName: 'Party Perfect Store',
    image: '/images/popcorn-boxes.jpg',
    retailPrice: 139,
    retailOriginalPrice: 199,
    wholesalePrice: 89,
    wholesaleMinUnits: 20,
    inStock: true,
    bulkSavings: 50,
  },
  {
    id: 'd11',
    name: 'Tissue Paper Rolls (12 pcs)',
    category: 'Napkins',
    storeName: 'Celebration Hub',
    image: '/images/tissue-rolls.jpg',
    retailPrice: 119,
    retailOriginalPrice: 169,
    wholesalePrice: 79,
    wholesaleMinUnits: 25,
    inStock: true,
    bulkSavings: 40,
  },
];

export const disposalCategories = [
  'All',
  'Plates',
  'Cups',
  'Napkins',
  'Cutlery',
  'Straws',
  'Boxes',
  'Trays',
  'Bowls',
  'Bags',
];

const DisposalPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pricingMode, setPricingMode] = useState<'retail' | 'wholesale'>('retail');

  const filteredProducts =
    selectedCategory === 'All'
      ? disposalProducts
      : disposalProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Home decoration setup"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold">
              Home <span className="text-gradient-festive">Disposal Products</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-6">

        {/* Category Filter */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2">
            {disposalCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border-2 border-green-800 rounded-2xl p-5 bg-[#F7F5EC] shadow-sm"
            >
              <img
                src={product.image}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />

              <h3 className="font-bold text-xl text-green-800">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-gray-600 mt-1 mb-3">
                🏪 {product.storeName}
              </div>

              {/* Pricing Toggle INSIDE CARD */}
              <div className="flex rounded-xl bg-[#EDE8DF] p-1 mb-4">
                <button
                  onClick={() => setPricingMode('retail')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    pricingMode === 'retail'
                      ? 'bg-white shadow text-black'
                      : 'text-gray-500'
                  }`}
                >
                  Retail
                </button>

                <button
                  onClick={() => setPricingMode('wholesale')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    pricingMode === 'wholesale'
                      ? 'bg-white shadow text-black'
                      : 'text-gray-500'
                  }`}
                >
                  Wholesale
                </button>
              </div>

              {/* Price Box */}
              <div className="bg-[#EDE8DF] rounded-xl p-4">

                <div className="flex justify-between border-b pb-3 mb-3">
                  <span className="font-semibold">Retail Price:</span>

                  <div>
                    <span className="text-green-800 font-bold text-xl">
                      ₹{product.retailPrice}
                    </span>
                    <span className="line-through text-gray-400 ml-2">
                      ₹{product.retailOriginalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Wholesale Price:</span>

                  <div className="text-right">
                    <span className="text-green-800 font-bold text-xl">
                      ₹{product.wholesalePrice}
                    </span>

                    <p className="text-sm text-gray-500">
                      Min. {product.wholesaleMinUnits} units
                    </p>
                  </div>
                </div>

              </div>

              {/* Stock + Savings */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-green-800 font-semibold">
                  In Stock
                </span>

                <span className="bg-[#E8C785] px-3 py-1 rounded-full text-sm">
                  Save ₹{product.bulkSavings} on bulk
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() =>
                    alert(`${product.name} added to cart (Demo Only)`)
                  }
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-800 text-white rounded-xl font-semibold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>

                <Link
                  to={`/disposal/${product.id}`}
                  className="border-2 border-yellow-600 text-yellow-700 px-4 py-3 rounded-xl flex items-center gap-2 font-semibold"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Link>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default DisposalPage;
