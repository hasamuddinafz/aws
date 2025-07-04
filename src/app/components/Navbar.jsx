"use client";
import React, { useState } from "react";
import { Menu, X, Code, Mail, User, Newspaper, HomeIcon } from "lucide-react";

// A more modern Link component with an animated underline effect
const Link = ({ href, children, className }) => (
  <a
    href={href}
    className={`relative text-gray-600 hover:text-gray-900 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${className}`}
  >
    {children}
  </a>
);

// Mobile navigation link component
const NavLink = ({ href, icon, children }) => (
  <a
    href={href}
    className="flex items-center text-gray-700 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-300"
  >
    {icon}
    <span className="ml-4 font-medium">{children}</span>
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: <HomeIcon size={22} className="text-gray-500" />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <Code size={22} className="text-gray-500" />,
    },
    {
      href: "/about",
      label: "About",
      icon: <User size={22} className="text-gray-500" />,
    },
    {
      href: "/blogs",
      label: "Blogs",
      icon: <Newspaper size={22} className="text-gray-500" />,
    },
  ];

  const contactItem = {
    href: "/contact",
    label: "Contact Me",
    icon: <Mail size={22} className="text-gray-500" />,
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                HASAMUDDIN AFZALI.
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a
              href={contactItem.href}
              className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-sm"
            >
              {contactItem.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-7 w-7" />
              ) : (
                <Menu className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {[...navItems, contactItem].map((item) => (
              <NavLink key={item.href} href={item.href} icon={item.icon}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
