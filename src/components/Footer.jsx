// src/components/Footer.js
'use client'
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-600 via-blue-600 to-blue-600 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg text-white font-bold">Interview</h2>
          <p className="text-white">© 2024 Name. All rights reserved.</p>
        </div>
        <div className="flex  space-x-4 mb-4 md:mb-0">
          <Link href="/about" className="text-white hover:text-white">About</Link>
          <Link href="/contact" className="text-white hover:text-white">Contact</Link>
          <Link href="/privacy" className="text-white hover:text-white">Privacy Policy</Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-white">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
