"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-white">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h1 className="text-4xl font-bold text-white">Kitchen</h1>
            <p className="text-sm text-gray-400 mt-4 max-w-md">
              Open an account in minutes, get full financial control for much longer.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="group bg-gray-800 p-3 rounded-full shadow-md hover:bg-primary transition">
                <Icon icon="fa6-brands:facebook-f" width="18" height="18" className="group-hover:text-white text-gray-400" />
              </Link>
              <Link href="#" className="group bg-gray-800 p-3 rounded-full shadow-md hover:bg-primary transition">
                <Icon icon="fa6-brands:instagram" width="18" height="18" className="group-hover:text-white text-gray-400" />
              </Link>
              <Link href="#" className="group bg-gray-800 p-3 rounded-full shadow-md hover:bg-primary transition">
                <Icon icon="fa6-brands:x-twitter" width="18" height="18" className="group-hover:text-white text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary transition">About</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Mobile</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition">How We Work?</Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary transition">Help/FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Affiliates</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Hotel Owners</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Partners</Link></li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates and recipes.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-3 w-full rounded-l-lg text-black focus:outline-none" 
              />
              <button className="bg-primary px-6 py-3 rounded-r-lg text-white hover:bg-primary-dark transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2025 Foodie. All Rights Reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="#" className="text-sm hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-primary transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
