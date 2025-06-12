import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart, Clock, Shield, Truck } from 'lucide-react';

export function BuySection() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <section id="buy" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CLAIM YOUR <span className="text-blue-500">POWER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Limited stock available. High demand product.
          </p>
        </div>

        {/* Main Product Card */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-gray-950 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          {/* Product Image */}
          <div className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-transparent">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"></div>
              <img 
                src='/pwo mock eks bilde.png' 
                alt="BorzFuel Pre-Workout Supplement" 
                className="max-h-[300px] lg:max-h-[500px] relative z-10 drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-6 lg:p-12">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex justify-between items-center mb-3 lg:mb-4">
                <span className="text-gray-400 text-xs lg:text-sm uppercase tracking-wide">Premium Pre-Workout</span>
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-2 lg:px-3 py-1 rounded-full">
                  BEST SELLER
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white">
                BORZFUEL SAVAGE FORMULA
              </h3>
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={16} fill="#3b82f6" color="#3b82f6" />
                  ))}
                </div>
                <span className="text-blue-500 ml-3 font-medium text-sm lg:text-base">4.9 (500+ reviews)</span>
              </div>
              <div className="mb-4 lg:mb-6">
                <span className="text-3xl font-bold text-white">$49.99</span>
                <span className="text-gray-400 line-through ml-2 lg:ml-3 text-lg lg:text-xl">$59.99</span>
                <span className="text-green-400 ml-2 lg:ml-3 font-bold text-sm lg:text-base">Save 17%</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6 lg:mb-8">
              <h4 className="font-bold mb-3 lg:mb-4 text-white text-base lg:text-md">SELECT QUANTITY</h4>
              <div className="flex items-center bg-gray-800 rounded-lg p-1 w-fit">
                <button 
                  onClick={decreaseQuantity} 
                  className="bg-gray-700 hover:bg-gray-600 p-2 lg:p-3 text-white transition-colors rounded-l-lg"
                >
                  <Minus size={15} />
                </button>
                <span className="px-6 lg:px-5 py-2 lg:py-2 bg-gray-800 text-white font-bold text-lg lg:text-md">
                  {quantity}
                </span>
                <button 
                  onClick={increaseQuantity} 
                  className="bg-gray-700 hover:bg-gray-600 p-2 lg:p-3 text-white transition-colors rounded-r-lg"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-6 lg:mb-8">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 py-4 lg:py-4 text-white font-bold flex items-center justify-center transition-all duration-300 rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]">
                <ShoppingCart className="mr-2 lg:mr-3" size={20} />
                <span className="text-sm lg:text-base">ADD TO CART - ${(49.99 * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Features - Compact on mobile */}
            <div className="space-y-2 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center text-gray-300 text-sm lg:text-base">
                <Truck size={18} className="text-green-500 mr-2 lg:mr-3" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm lg:text-base">
                <Shield size={18} className="text-blue-500 mr-2 lg:mr-3" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            {/* Offer - Smaller on mobile */}
            <div className="bg-gradient-to-r from-blue-600/20 to-transparent p-4 lg:p-6 border border-blue-600/50 rounded-xl">
              <div className="flex items-center mb-2 lg:mb-3">
                <Clock size={18} className="text-blue-500 mr-2 lg:mr-3" />
                <h4 className="font-bold text-white text-base lg:text-lg">LIMITED TIME OFFER</h4>
              </div>
              <p className="text-gray-300 text-sm lg:text-base">
                Buy 2 containers, get 1 free. Use code{' '}
                <span className="text-blue-400 font-bold bg-blue-600/20 px-2 py-1 rounded text-xs lg:text-sm">BORZPACK</span> at
                checkout.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter - Smaller on mobile */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-6 lg:p-10 text-center rounded-2xl border border-gray-700 shadow-xl">
          <h3 className="font-bold text-2xl lg:text-3xl mb-3 lg:mb-4 text-white">JOIN THE PACK</h3>
          <p className="text-gray-400 mb-6 lg:mb-8 text-base lg:text-lg">Get exclusive offers, news and early access. No spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 lg:px-6 py-3 lg:py-4 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder-gray-400 border border-gray-700 text-sm lg:text-base"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-6 lg:px-8 py-3 lg:py-4 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/25 transform hover:scale-105 text-sm lg:text-base"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

type StarProps = {
  size: number;
  fill: string;
  color: string;
};

function Star({ size, fill, color }: StarProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}