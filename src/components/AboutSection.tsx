import React from 'react';
export function AboutSection() {
  return <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-full h-48 sm:h-64 md:h-96 bg-zinc-800 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center">
                    BORZ<span className="text-blue-500">FUEL</span>
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-4 right-2 md:-right-4 bg-blue-600 text-white px-4 py-2 font-bold rounded shadow">
                EST. 2023
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              THE <span className="text-blue-500">MISSION</span>
            </h2>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center md:text-left">
              BorzFuel was born from frustration. Too many supplements promised
              the world but delivered nothing but underdosed ingredients and
              proprietary blends hiding cheap fillers.
            </p>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center md:text-left">
              We created BorzFuel with a simple mission: develop the most
              effective, transparent, and powerful pre-workout on the market. No
              compromises. No shortcuts. Just pure, savage performance.
            </p>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center md:text-left">
              "Borz" – the Chechen word for wolf – embodies everything we stand
              for: strength, pack mentality, and relentless pursuit of goals.
            </p>
            <p className="font-bold text-lg sm:text-xl text-center md:text-left">
              Join the pack. Unleash your potential.
            </p>
          </div>
        </div>
      </div>
    </section>;
}