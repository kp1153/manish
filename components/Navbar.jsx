"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// मेनू आइटम की लिस्ट
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      {/* कंपनी का नाम (Connektpro) */}
      <div className="bg-amber-700 py-6 px-4 text-white text-center font-extrabold text-2xl">
        <Link href="/">Connektpro</Link>
      </div>

      {/* नेविगेशन मेनू */}
      <div className="container mx-auto px-4 py-3">
        <ul className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.name} className="flex-shrink-0">
              <Link
                href={item.href}
                className={`
                  font-semibold py-2 px-3 rounded-lg transition-colors whitespace-nowrap
                  ${
                    pathname === item.href
                      ? "text-white bg-blue-600 hover:bg-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
