import React from 'react';
import { Star } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Alex K.',
    role: 'CrossFit Athlete',
    quote: "BorzFuel has transformed my training. The focus and energy are unmatched - I'm hitting PRs I never thought possible.",
    rating: 5
  }, {
    name: 'Sarah M.',
    role: 'Powerlifter',
    quote: "Finally a pre-workout that delivers what it promises. The pump is insane and I can push through plateaus like they're nothing.",
    rating: 5
  }, {
    name: 'Derek W.',
    role: 'MMA Fighter',
    quote: "I've tried dozens of pre-workouts. Nothing comes close to the intensity BorzFuel gives me. It's like unlocking beast mode.",
    rating: 5
  }];
  return <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            THE PACK <span className="text-blue-500">DOESN'T LIE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the elite athletes who have unleashed their inner Borz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-900 p-6 border-b-2 border-blue-600 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="#3b82f6" color="#3b82f6" />)}
              </div>
              <p className="text-gray-200 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-900 px-6 py-4 rounded-lg">
            <p className="text-xl font-bold">
              4.9{' '}
              <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
                ★★★★★
              </span>
            </p>
            <p className="text-gray-400">From 500+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>;
}