import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Sidebar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="bg-[#2b2b2b] fixed top-18 left-50 h-[75vh] w-72 rounded-2xl p-6 text-center shadow-xl overflow-y-auto z-10 transition-all duration-300 ease-in-out flex flex-col justify-between">
        <div className="flex flex-col items-center mb-auto">
          {/* Avatar */}
          <div
            onClick={() => setShowProfile(true)}
            className="bg-gray-800 p-4 rounded-xl mb-6 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <img
              src="/gimage.png"
              alt="Avatar"
              className="w-20 h-20 rounded-full transition-transform duration-100 transform hover:scale-100"
            />
          </div>

          {/* Name + Role */}
          <h2 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 hover:text-yellow-400 hover:scale-105">
            Awadhooth Shrinivas Kulkarni
          </h2>
          <p className="text-gray-400 text-sm mb-6 transition-colors duration-300 hover:text-yellow-400 hover:scale-105">
            Fullstack Developer
          </p>

          {/* Contact Info */}
          <h3 className="text-lg font-semibold mt-6 mb-4 text-white transition-colors duration-300 hover:text-yellow-400">
            Contact
          </h3>
          <div className="flex flex-col gap-3 mb-6 items-center">
            <a
              href="mailto:awadhooths16@gmail.com"
              className="bg-[#1e1e1e] rounded-xl p-3 w-60 text-center shadow-md hover:bg-[#333] transition-all duration-300 transform hover:scale-105"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaEnvelope /> Email
              </h4>
              <p className="text-xs text-gray-300 break-all">
                awadhooths16@gmail.com
              </p>
            </a>

            <a
              href="tel:6360079721"
              className="bg-[#1e1e1e] rounded-xl p-3 w-60 text-center shadow-md hover:bg-[#333] transition-all duration-300 transform hover:scale-105"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaPhone /> Phone
              </h4>
              <p className="text-xs text-gray-300">6360079721</p>
            </a>

            <a
              href="https://www.google.com/maps/place/Tumakuru,+Karnataka,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e1e1e] rounded-xl p-3 w-60 text-center shadow-md hover:bg-[#333] transition-all duration-300 transform hover:scale-105"
            >
              <h4 className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                <FaMapMarkerAlt /> Location
              </h4>
              <p className="text-xs text-gray-300">Tumakuru, India</p>
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-auto mb-4">
          <a
            href="https://www.linkedin.com/in/rithesh-d-j"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-[#1e1e1e] text-base" />
          </a>
          <a
            href="https://github.com/awadhoothsk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-[#1e1e1e] text-base" />
          </a>
          <a
            href="https://www.instagram.com/awadhoothsk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-[#1e1e1e] text-base" />
          </a>
          <a
            href="https://twitter.com/awadhoothsk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaTwitter className="text-[#1e1e1e] text-base" />
          </a>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out opacity-100"
          onClick={() => setShowProfile(false)}
        >
          <img
            src="/gimage.png"
            alt="Full Profile"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-4 border-yellow-500 transition-all duration-500 transform hover:scale-110"
          />
        </div>
      )}
    </>
  );
}
