import React from 'react';
import { CheckCircle } from 'lucide-react';
export function Ingredients() {
  const ingredients = [{
    name: 'L-Citrulline Malate',
    benefit: 'Enhanced blood flow and massive pumps',
    amount: '8,000mg'
  }, {
    name: 'Beta-Alanine',
    benefit: 'Increased muscular endurance and power output',
    amount: '3,200mg'
  }, {
    name: 'Caffeine Anhydrous',
    benefit: 'Explosive energy and mental alertness',
    amount: '350mg'
  }, {
    name: 'L-Theanine',
    benefit: 'Smooth energy without jitters or crash',
    amount: '200mg'
  }, {
    name: 'Alpha-GPC',
    benefit: 'Enhanced mind-muscle connection and focus',
    amount: '300mg'
  }, {
    name: 'Betaine Anhydrous',
    benefit: 'Increased power and strength',
    amount: '2,500mg'
  }];
  return <section id="ingredients" className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SCIENCE-BACKED <span className="text-accent-dark">FORMULA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every ingredient in clinical doses. No fillers. No compromises. Just
            pure performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-gray-950 p-5 flex rounded-lg items-start"
            >
              <CheckCircle size={24} className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-2 gap-1">
                  <h3 className="font-bold text-base break-words">{ingredient.name}</h3>
                  <span className="text-primary-600 font-mono text-sm xs:text-base">
                    {ingredient.amount}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{ingredient.benefit}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gray-900 p-6 border-l-4 border-blue-600 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">THIRD-PARTY TESTED</h3>
              <p className="text-gray-400">
                Every batch is rigorously tested for purity and potency. No
                banned substances. Certified clean for competitive athletes.
              </p>
            </div>
            <a
              href="#"
              className="w-full md:w-auto mt-4 md:mt-0 border border-white hover:bg-white hover:text-black px-6 py-3 text-white font-bold text-center transition-colors rounded"
            >
              VIEW CERTIFICATE
            </a>
          </div>
        </div>
      </div>
    </section>;
}