import React from 'react'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
  <>
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      alt="Birthday Celebration"
      className="w-full h-full object-cover object-top"
      src="https://readdy.ai/api/search-image?query=A%20vibrant%20and%20joyful%20birthday%20party%20celebration%20scene%20with%20colorful%20balloons%20in%20pastel%20pink%20purple%20yellow%20and%20mint%20green%20floating%20elegantly%20ribbons%20streamers%20and%20confetti%20scattered%20throughout%20sparkling%20LED%20string%20lights%20creating%20a%20magical%20atmosphere%20beautiful%20birthday%20banners%20and%20backdrops%20soft%20dreamy%20lighting%20professional%20photography%20style%20festive%20and%20cheerful%20mood%20perfect%20for%20e-commerce%20hero%20banner%20high%20quality%208k%20resolution%20clean%20modern%20aesthetic%20celebration%20theme&width=1920&height=1080&seq=hero-birthday-bliss-main&orientation=landscape"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
  </div>
  <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
    <div className="mb-6 inline-block">
      <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
        ✨ Celebrate Every Moment with Birthday Bliss
      </span>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Make Every Birthday
      <br />
      <span className="text-pink-300">Magical</span>
    </h1>
    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
      Discover premium birthday decorations from trusted sellers. Balloons,
      ribbons, LED lights, and everything you need for an unforgettable
      celebration.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/products"
        data-discover="true"
      >
        <i className="ri-shopping-bag-line mr-2" />
        Shop Now
      </a>
      <a
        className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all text-base font-semibold border-2 border-white/50 whitespace-nowrap cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories"
        data-discover="true"
      >
        <i className="ri-grid-line mr-2" />
        Explore Categories
      </a>
    </div>
    <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">500+</div>
        <div className="text-white/80 text-sm">Products</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">100+</div>
        <div className="text-white/80 text-sm">Trusted Sellers</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">10K+</div>
        <div className="text-white/80 text-sm">Happy Customers</div>
      </div>
    </div>
  </div>
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <i className="ri-arrow-down-line text-3xl text-white" />
  </div>
</section>
<CategoryCarousel/>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Everything You Need for the
        <br />
        <span className="text-pink-500">Perfect Birthday</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Curated collections of premium decorations to make your celebration
        unforgettable
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a
        className="group cursor-pointer"
        href="/categories"
        data-discover="true"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              alt="Birthday Balloons"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="https://readdy.ai/api/search-image?query=Premium%20birthday%20balloons%20collection%20featuring%20number%20balloons%20metallic%20balloons%20confetti%20balloons%20in%20coordinated%20pastel%20pink%20gold%20and%20silver%20colors%20floating%20elegantly%20professional%20product%20photography%20clean%20soft%20background%20high%20quality%20celebration%20theme%20perfect%20for%20featured%20section%20display&width=600&height=600&seq=featured-balloons&orientation=squarish"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-500 rounded-full mb-4 group-hover:bg-pink-600 transition-colors">
              <i className="ri-balloon-line text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
              Birthday Balloons
            </h3>
            <p className="text-gray-600 mb-4">
              Premium quality balloons in all colors and sizes
            </p>
            <div className="flex items-center text-pink-500 font-semibold group-hover:gap-2 transition-all">
              Shop Now
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
      <a
        className="group cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories/ribbons-streamers"
        data-discover="true"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              alt="Ribbons"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="https://readdy.ai/api/search-image?query=Beautiful%20collection%20of%20decorative%20ribbons%20including%20satin%20ribbons%20organza%20ribbons%20metallic%20ribbons%20in%20coordinated%20pastel%20and%20vibrant%20colors%20arranged%20elegantly%20professional%20product%20photography%20clean%20soft%20background%20high%20quality%20party%20decoration%20theme%20perfect%20for%20featured%20display&width=600&height=600&seq=featured-ribbons&orientation=squarish"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-500 rounded-full mb-4 group-hover:bg-pink-600 transition-colors">
              <i className="ri-gift-line text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
              Ribbons
            </h3>
            <p className="text-gray-600 mb-4">
              Elegant ribbons and bows for perfect finishing touches
            </p>
            <div className="flex items-center text-pink-500 font-semibold group-hover:gap-2 transition-all">
              Shop Now
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
      <a
        className="group cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories/party-sprays-confetti"
        data-discover="true"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              alt="Party Sprays"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="https://readdy.ai/api/search-image?query=Colorful%20party%20spray%20cans%20and%20confetti%20collection%20featuring%20metallic%20gold%20silver%20and%20rainbow%20confetti%20professional%20product%20photography%20clean%20soft%20background%20high%20quality%20celebration%20theme%20perfect%20for%20featured%20section%20showcase&width=600&height=600&seq=featured-sprays&orientation=squarish"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-500 rounded-full mb-4 group-hover:bg-pink-600 transition-colors">
              <i className="ri-sparkling-line text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
              Party Sprays
            </h3>
            <p className="text-gray-600 mb-4">
              Fun party sprays and confetti for magical moments
            </p>
            <div className="flex items-center text-pink-500 font-semibold group-hover:gap-2 transition-all">
              Shop Now
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
      <a
        className="group cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories/led-lights"
        data-discover="true"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              alt="LED Lights"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="https://readdy.ai/api/search-image?query=Beautiful%20LED%20string%20lights%20and%20fairy%20lights%20in%20warm%20white%20and%20colorful%20options%20creating%20magical%20ambiance%20perfect%20for%20birthday%20parties%20professional%20product%20photography%20clean%20soft%20background%20high%20quality%20celebration%20lighting%20theme%20perfect%20for%20featured%20display&width=600&height=600&seq=featured-led-lights&orientation=squarish"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-500 rounded-full mb-4 group-hover:bg-pink-600 transition-colors">
              <i className="ri-lightbulb-flash-line text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
              LED Lights
            </h3>
            <p className="text-gray-600 mb-4">
              Sparkling LED lights to create magical ambiance
            </p>
            <div className="flex items-center text-pink-500 font-semibold group-hover:gap-2 transition-all">
              Shop Now
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
      <a
        className="group cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/categories/backdrops-banners"
        data-discover="true"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              alt="Backdrops & Banners"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src="https://readdy.ai/api/search-image?query=Elegant%20birthday%20party%20backdrops%20and%20banners%20featuring%20happy%20birthday%20text%20beautiful%20designs%20in%20coordinated%20pastel%20and%20metallic%20colors%20professional%20product%20photography%20clean%20soft%20background%20high%20quality%20celebration%20theme%20perfect%20for%20featured%20section%20display&width=600&height=600&seq=featured-backdrops&orientation=squarish"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-500 rounded-full mb-4 group-hover:bg-pink-600 transition-colors">
              <i className="ri-image-line text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
              Backdrops &amp; Banners
            </h3>
            <p className="text-gray-600 mb-4">
              Stunning backdrops and banners for photo-worthy moments
            </p>
            <div className="flex items-center text-pink-500 font-semibold group-hover:gap-2 transition-all">
              Shop Now
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className="text-center mt-12">
      <a
        className="inline-flex items-center px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
        href="/preview/5c7a3b7b-8428-4827-9c67-1cd627e3a8d7/5185289/products"
        data-discover="true"
      >
        View All Products
        <i className="ri-arrow-right-line ml-2" />
      </a>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-white to-pink-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why Choose <span className="text-pink-500">Birthday Bliss</span>?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We are committed to making every birthday celebration magical and
        memorable
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-medal-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          High-Quality Decorations
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Premium products from verified sellers, ensuring durability and beauty
          for your special day
        </p>
      </div>
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-price-tag-3-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          Affordable Pricing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Competitive prices without compromising quality. Get the best value
          for your celebration
        </p>
      </div>
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-shield-check-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          Trusted Sellers
        </h3>
        <p className="text-gray-600 leading-relaxed">
          All sellers are verified and rated by our community. Shop with
          confidence
        </p>
      </div>
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-truck-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          Fast Delivery
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Quick and reliable shipping to ensure your decorations arrive on time
        </p>
      </div>
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-customer-service-2-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          24/7 Support
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our dedicated team is always here to help with any questions or
          concerns
        </p>
      </div>
      <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <i className="ri-refresh-line text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
          Easy Returns
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Hassle-free return policy. Not satisfied? We will make it right
        </p>
      </div>
    </div>
    <div className="mt-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">500+</div>
          <div className="text-pink-100 text-sm">Premium Products</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">100+</div>
          <div className="text-pink-100 text-sm">Verified Sellers</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">10K+</div>
          <div className="text-pink-100 text-sm">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">4.9</div>
          <div className="text-pink-100 text-sm">Average Rating</div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default Home