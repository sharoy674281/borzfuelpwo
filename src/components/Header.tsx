import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500">
          BORZ<span className="text-blue-600">FUEL</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-white hover:text-blue-500 transition-colors">
            Product
          </a>
          <a href="#benefits" className="text-white hover:text-blue-500 transition-colors">
            Benefits
          </a>
          <a href="#ingredients" className="text-white hover:text-blue-500 transition-colors">
            Ingredients
          </a>
          <a href="#about" className="text-white hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#buy" className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-white font-bold transition-colors rounded-md hover:from-blue-600 hover:to-blue-800">
            BUY NOW
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#product" className="text-white hover:text-blue-500 transition-colors py-2 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>
              Product
            </a>
            <a href="#benefits" className="text-white hover:text-blue-500 transition-colors py-2 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </a>
            <a href="#ingredients" className="text-white hover:text-blue-500 transition-colors py-2 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>
              Ingredients
            </a>
            <a href="#about" className="text-white hover:text-blue-500 transition-colors py-2 border-b border-gray-800" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#buy" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-bold text-center transition-colors" onClick={() => setIsMenuOpen(false)}>
              BUY NOW
            </a>
          </div>
        </div>}
    </header>;
}