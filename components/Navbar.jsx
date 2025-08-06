"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Calendar,
  MapPin,
  Award,
  FileText,
  Phone,
} from "lucide-react";

const MiceNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-slate-800">
              <span className="text-blue-600">Connekt</span>pro
            </div>
            <div className="ml-2 text-xs text-gray-600 hidden sm:block">
              Connecting Visions, Crafting Experiences
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("services")}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <Users className="w-4 h-4 mr-1" />
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a
                    href="#conferences"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Calendar className="w-4 h-4 mr-3" />
                    <div>
                      <div className="font-medium">Conference Production</div>
                      <div className="text-xs text-gray-500">
                        Full-service event management
                      </div>
                    </div>
                  </a>
                  <a
                    href="#incentives"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Award className="w-4 h-4 mr-3" />
                    <div>
                      <div className="font-medium">Incentive Programs</div>
                      <div className="text-xs text-gray-500">
                        Corporate rewards & team building
                      </div>
                    </div>
                  </a>
                  <a
                    href="#meetings"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Users className="w-4 h-4 mr-3" />
                    <div>
                      <div className="font-medium">Meeting Coordination</div>
                      <div className="text-xs text-gray-500">
                        Logistics & speaker management
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Packages Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("packages")}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Packages
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "packages" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a
                    href="#enterprise"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Enterprise Solutions
                  </a>
                  <a
                    href="#premium"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Premium Events
                  </a>
                  <a
                    href="#essential"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Essential Meetings
                  </a>
                </div>
              )}
            </div>

            {/* Venues */}
            <a
              href="#venues"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Venues
            </a>

            {/* Case Studies */}
            <a
              href="#case-studies"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <FileText className="w-4 h-4 mr-1" />
              Case Studies
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Request Proposal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>

            <div className="py-2">
              <div className="text-gray-700 font-medium mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Services
              </div>
              <div className="pl-6 space-y-2">
                <a
                  href="#conferences"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Conference Production
                </a>
                <a
                  href="#incentives"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Incentive Programs
                </a>
                <a
                  href="#meetings"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Meeting Coordination
                </a>
              </div>
            </div>

            <div className="py-2">
              <div className="text-gray-700 font-medium mb-2">Packages</div>
              <div className="pl-6 space-y-2">
                <a
                  href="#enterprise"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Enterprise Solutions
                </a>
                <a
                  href="#premium"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Premium Events
                </a>
                <a
                  href="#essential"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  Essential Meetings
                </a>
              </div>
            </div>

            <a
              href="#venues"
              className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Venues
            </a>

            <a
              href="#case-studies"
              className="block py-2 text-gray-700 hover:text-blue-600 flex items-center"
            >
              <FileText className="w-4 h-4 mr-2" />
              Case Studies
            </a>

            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </a>

            <div className="pt-4">
              <a
                href="#contact"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MiceNavbar;
