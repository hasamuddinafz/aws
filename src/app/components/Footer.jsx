"use client";
import React from "react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import Link from "next/link";

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="text-gray-500 hover:text-green-600 transition-colors duration-300"
  >
    {children}
  </Link>
);

const SocialLink = ({ href, icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300"
  >
    {icon}
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/blogs",
      label: "Blogs",
    },
  ];

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              HASAMUDDIN AFZALI.
            </h2>
            <p className="text-gray-500 max-w-xs">
              A passionate developer creating modern web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>
                    <span className="flex items-center">{link.label}</span>
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex space-x-2 mt-4">
              <SocialLink
                href="https://github.com/hasamuddinafz"
                icon={<SiGithub size={20} />}
              />
              <SocialLink
                href="https://www.instagram.com/hasam.afzali/"
                icon={<SiInstagram size={20} />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/hasamuddin-afzali/"
                icon={<SiLinkedin size={20} />}
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Hasamuddinafzali.com All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
