import React from 'react'
import { CircleDot } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CircleDot className="h-8 w-8 text-[#142F32]" />
            <span className="ml-2 text-xl font-semibold text-[#142F32]">Trendtial</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          <div>
            <button className="bg-[#142F32] text-white px-6 py-2 rounded-full hover:bg-[#1a3b3f] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
