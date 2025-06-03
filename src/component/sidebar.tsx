

import Image from "next/image";
import { FaBriefcase, FaFileAlt, FaHome, FaPhone, FaQuoteLeft, FaUser } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


export default function Sidebar() {
    return (
        <div className="h-screen w-64 bg-black text-white flex flex-col items-center p-4 fixed left-0 top-0 overflow-y-auto">
          <div className="text-center mb-4">
            <Image
              src="/pic-profile.jpeg"
              alt="profile"
              className="rounded-full"
              width={200}
              height={200}
            />
            <h2 className="mt-2 text-2xl font-bold text-white">
              Angga Jovary
            </h2>

            <div className="flex justify-center gap-5 mt-8 text-xl">
              <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <nav className="w-full mt-4">
            <ul className="space-y-6 text-xl">
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#home" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaHome />
                Home
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#about" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaUser />
                About
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#resume" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaFileAlt />
                Resume
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#portfolio" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaBriefcase />
                Portfolio
                </a> 
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#testimonials" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaQuoteLeft />
                Testimonials
                </a> 
              </li>
              <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
                <a href="#contact" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <FaPhone />
                Contact
                </a> 
              </li>
            </ul>
          </nav>
        </div>
    )
}