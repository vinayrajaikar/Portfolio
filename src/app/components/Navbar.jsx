"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Roboto } from "next/font/google"
import Link from "next/link"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <nav
      className={`${roboto.className} w-full h-16 p-3 text-white flex items-center justify-between border-b b-2 bg-[#030612] relative`}
    >
      {/* Mobile Menu Button */}
      <button className="lg:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:w-1/3 lg:items-center lg:justify-between">
        <Link href="#about" className="hover:text-gray-300 transition-colors">
          About me
        </Link>
        <Link href="#projects" className="hover:text-gray-300 transition-colors">
          Projects
        </Link>
        <Link href="#articles" className="hover:text-gray-300 transition-colors">
          Articles
        </Link>
        <Link href="#contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#030612] border-b border-gray-800 py-4 px-6 flex flex-col space-y-4 lg:hidden z-50">
          <Link href="#about" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
            About me
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#articles" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
            Articles
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}

    
      <div className="lg:hidden"></div>

      {/* Theme Toggle */}
      <button className="flex items-center justify-center" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
        <span className="ml-2">Theme</span>
      </button>
    </nav>
  )
}

export default Navbar

