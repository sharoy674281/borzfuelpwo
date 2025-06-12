import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white tracking-wide">
          BORZ<span className="text-blue-500">FUEL</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <a href="#buy" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
            Product
          </a>
          <a href="#benefits" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
            Benefits
          </a>
          <a href="#ingredients" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
            Ingredients
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
            About
          </a>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg">
              <User size={20} />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg">
              <ShoppingCart size={20} />
            </button>
          </div>
          <a href="#buy" className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-white font-bold transition-all rounded-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transform hover:scale-105">
            BUY NOW
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-blue-500 transition-colors p-2 hover:bg-gray-800/50 rounded-lg" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800/50 animate-slide-down">
          <div className="container mx-auto px-6 py-8 flex flex-col h-screen space-y-10">
            <a 
              href="#buy" 
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all py-4 px-6 rounded-lg font-medium tracking-wide animate-fade-in-up" 
              style={{ animationDelay: '0.1s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a 
              href="#benefits" 
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all py-4 px-6 rounded-lg font-medium tracking-wide animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#ingredients" 
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all py-4 px-6 rounded-lg font-medium tracking-wide animate-fade-in-up" 
              style={{ animationDelay: '0.3s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Ingredients
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all py-4 px-6 rounded-lg font-medium tracking-wide animate-fade-in-up" 
              style={{ animationDelay: '0.4s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            
            {/* Mobile Actions */}
            <div className="pt-6 mt-6 border-t border-gray-800/50 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center space-x-6">
                <button className="text-gray-300 hover:text-white transition-colors p-3 hover:bg-gray-800/50 rounded-lg">
                  <User size={22} />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors p-3 hover:bg-gray-800/50 rounded-lg">
                  <ShoppingCart size={22} />
                </button>
              </div>
              <a 
                href="#buy" 
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 py-4 text-white font-bold text-center transition-all rounded-lg shadow-lg" 
                onClick={() => setIsMenuOpen(false)}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
}