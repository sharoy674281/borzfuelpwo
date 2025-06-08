import React from 'react';
import { Zap, Target, Battery, Brain } from 'lucide-react';
export function ProductBenefits() {
  const benefits = [{
    icon: <Zap size={32} className="text-blue-500" />,
    title: 'EXPLOSIVE ENERGY',
    description: 'Scientifically formulated to deliver sustained energy without the crash. Dominate every rep, every set, every workout.'
  }, {
    icon: <Target size={32} className="text-blue-500" />,
    title: 'LASER FOCUS',
    description: 'Enhanced cognitive performance to lock in and attack your goals with predator-like intensity and concentration.'
  }, {
    icon: <Battery size={32} className="text-blue-500" />,
    title: 'EXTENDED ENDURANCE',
    description: 'Push past your limits with improved stamina and delayed fatigue. Go harder for longer with every scoop.'
  }, {
    icon: <Brain size={32} className="text-blue-500" />,
    title: 'MIND-MUSCLE CONNECTION',
    description: 'Advanced nootropics create the ultimate neural pathway for maximum muscle recruitment and growth.'
  }];
  return <section id="benefits" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            UNLEASH YOUR{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              FULL POTENTIAL
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            BorzFuel is engineered for those who refuse to be average. For the
            hunters, not the hunted.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-gray-950 p-6 border-t-2 border-blue-600 hover:transform hover:-translate-y-2 transition-transform duration-300 rounded-lg">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#buy" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white font-bold inline-block transition-colors">
            CLAIM YOUR POWER
          </a>
        </div>
      </div>
    </section>;
}