import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Download,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Conference Production",
    "Incentive Programs",
    "Meeting Coordination",
    "Venue Sourcing",
    "Event Management",
    "Corporate Travel",
  ];

  const destinations = [
    "Delhi NCR",
    "Mumbai",
    "Goa",
    "Jaipur",
    "Bengaluru",
    "Hyderabad",
  ];

  const resources = [
    { name: "Company Profile", type: "PDF" },
    { name: "Venue Catalog", type: "PDF" },
    { name: "Pricing Guide", type: "PDF" },
    { name: "Case Studies", type: "PDF" },
    { name: "Event Checklist", type: "PDF" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="text-blue-400">Connekt</span>pro
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Connecting Visions, Crafting Experiences
              </p>
              <p className="text-gray-400 leading-relaxed">
                India's trusted MICE solutions provider since 2013. We
                specialize in delivering seamless corporate events that drive
                business success and create lasting impressions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>info@connektpro.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-blue-400" />
                <span>
                  Corporate Office: Sector 18, Gurgaon
                  <br />
                  Haryana 122015, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-3">Follow Us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              MICE Destinations
            </h4>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Resources
            </h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    {resource.name}
                    <span className="ml-1 text-xs bg-slate-700 px-1 rounded">
                      {resource.type}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-semibold mb-2 text-blue-400">Stay Updated</h5>
              <p className="text-gray-400 text-xs mb-3">
                Get MICE industry insights and event trends
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 text-white px-3 py-2 rounded-l-lg text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button className="bg-blue-600 px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-1">
                Ready to Plan Your Next Corporate Event?
              </h3>
              <p className="text-blue-100 text-sm">
                Get a customized proposal within 24 hours
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Proposal
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              © 2025 Connektpro. All rights reserved. | Connecting Visions,
              Crafting Experiences
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
