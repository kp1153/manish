"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Users,
  Calendar,
  MapPin,
  Award,
  FileText,
  Phone,
} from "lucide-react";

const MiceNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-slate-800">
              <span className="text-blue-600">Connekt</span>pro
            </div>
            <div className="ml-2 text-xs text-gray-600 hidden sm:block">
              Connecting Visions, Crafting Experiences
            </div>
          </div>

          {/* Combined Menu - always visible */}
          <div className="flex flex-col md:flex-row w-full md:w-auto mt-2 md:mt-0 items-start md:items-center space-y-2 md:space-y-0 md:space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle("services")}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <Users className="w-4 h-4 mr-1" />
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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
                type="button"
                onClick={() => handleDropdownToggle("packages")}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Packages
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === "packages" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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

            <a
              href="#venues"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Venues
            </a>

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

            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center md:ml-4"
              style={{ marginTop: "8px" }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Request Proposal
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MiceNavbar;
