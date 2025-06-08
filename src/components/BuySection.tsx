import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart, Clock } from 'lucide-react';
export function BuySection() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  return <section id="buy" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CLAIM YOUR <span className="text-blue-500">POWER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Limited stock available. High demand product.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-gray-950 rounded-xl overflow-hidden">
          <div className="lg:w-1/2 p-8 flex items-center justify-center">
            <img src='/pwo mock eks bilde.png' alt="BorzFuel Pre-Workout Supplement" className="max-h-[500px]" />
          </div>
          <div className="lg:w-1/2 p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Premium Pre-Workout</span>
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm px-2 py-1 rounded">
                  BEST SELLER
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                BORZFUEL SAVAGE FORMULA
              </h3>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#3b82f6" color="#3b82f6" />)}
                </div>
                <span className="text-blue-500 ml-2">500+ reviews</span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="text-gray-400 line-through ml-2">$59.99</span>
                <span className="text-blue-500 ml-2">Save 17%</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-bold mb-2">SELECT QUANTITY</h4>
              <div className="flex items-center">                <button onClick={decreaseQuantity} className="bg-zinc-800 hover:bg-zinc-700 p-2 text-white transition-colors">
                  <Minus size={20} />
                </button>
                <span className="px-8 py-2 bg-zinc-800 text-white font-bold">
                  {quantity}
                </span>
                <button onClick={increaseQuantity} className="bg-zinc-800 hover:bg-zinc-700 p-2 text-white transition-colors">
                  <Plus size={20} />
                </button>
              </div>
            </div>
            <div className="mb-6">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 py-4 text-white font-bold flex items-center justify-center transition-colors rounded-md">
                <ShoppingCart className="mr-2" size={20} />
                ADD TO CART - ${(49.99 * quantity).toFixed(2)}
              </button>
            </div>
            <div className="flex items-center text-gray-400 mb-4">
              <Clock size={20} className="text-blue-500 mr-2" />
              <span>Free shipping on orders over $75</span>
            </div>
            <div className="p-4 border border-blue-600 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock size={20} className="text-accent-dark mr-2" />
                <h4 className="font-bold">LIMITED TIME OFFER</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Buy 2 containers, get 1 free. Use code{' '}
                <span className="text-white font-bold">BORZPACK</span> at
                checkout.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-zinc-900 to-gray-950 p-8 text-center rounded-xl shadow-lg border border-zinc-800">
          <h3 className="font-extrabold text-2xl mb-2 text-white tracking-tight">JOIN THE PACK</h3>
          <p className="text-gray-400 mb-6 text-sm">Get exclusive offers, news and early access. No spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder-gray-400 border border-zinc-700"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-7 py-3 text-white font-bold rounded-md shadow transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>;
}
type StarProps = {
  size: number;
  fill: string;
  color: string;
};

function Star({
  size,
  fill,
  color
}: StarProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>;
}