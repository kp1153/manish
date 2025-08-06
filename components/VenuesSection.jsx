import {
  MapPin,
  Users,
  Wifi,
  Monitor,
  Car,
  Coffee,
  Filter,
} from "lucide-react";

const VenuesSection = () => {
  const venues = [
    {
      id: 1,
      name: "Delhi Convention Center",
      location: "Delhi NCR",
      image: "/placeholder-venue-1.jpg",
      capacity: "500-2000",
      type: "Conference Center",
      features: ["A/V Equipment", "High-Speed WiFi", "Parking", "Catering"],
      description:
        "State-of-the-art convention center perfect for large conferences and exhibitions.",
      priceRange: "₹15,000 - ₹50,000 per day",
    },
    {
      id: 2,
      name: "Goa Beach Resort",
      location: "Goa",
      image: "/placeholder-venue-2.jpg",
      capacity: "50-300",
      type: "Resort",
      features: ["Beachfront", "Team Building", "Luxury Rooms", "Spa Services"],
      description:
        "Luxury beachfront resort ideal for incentive travel and corporate retreats.",
      priceRange: "₹25,000 - ₹75,000 per day",
    },
    {
      id: 3,
      name: "Mumbai Business Hotel",
      location: "Mumbai",
      image: "/placeholder-venue-3.jpg",
      capacity: "20-200",
      type: "Business Hotel",
      features: [
        "Boardrooms",
        "Business Center",
        "Airport Proximity",
        "5-Star Service",
      ],
      description:
        "Premium business hotel with multiple meeting rooms and executive facilities.",
      priceRange: "₹20,000 - ₹60,000 per day",
    },
    {
      id: 4,
      name: "Jaipur Heritage Palace",
      location: "Jaipur",
      image: "/placeholder-venue-4.jpg",
      capacity: "100-500",
      type: "Heritage Venue",
      features: [
        "Royal Ambiance",
        "Cultural Programs",
        "Photography",
        "Traditional Catering",
      ],
      description:
        "Majestic heritage venue perfect for memorable corporate events and galas.",
      priceRange: "₹30,000 - ₹80,000 per day",
    },
  ];

  const filterOptions = [
    { label: "Capacity", options: ["50-100", "100-300", "300-500", "500+"] },
    {
      label: "Location",
      options: [
        "Delhi NCR",
        "Mumbai",
        "Goa",
        "Jaipur",
        "Bengaluru",
        "Hyderabad",
      ],
    },
    {
      label: "Type",
      options: ["Conference Center", "Hotel", "Resort", "Heritage"],
    },
    {
      label: "Features",
      options: [
        "A/V Equipment",
        "WiFi",
        "Parking",
        "Catering",
        "Accommodation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Business-Ready Venues
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated venues across India's major business destinations,
            each equipped with modern amenities and professional services for
            successful corporate events.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-slate-800">
              Filter Venues
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {filterOptions.map((filter, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {filter.label}
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select {filter.label}</option>
                  {filter.options.map((option, optIndex) => (
                    <option key={optIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Venue Image */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                <div className="text-center text-slate-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">{venue.name}</p>
                  <p className="text-sm">{venue.location}</p>
                </div>
              </div>

              {/* Venue Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {venue.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {venue.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {venue.description}
                </p>

                {/* Venue Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">Capacity: {venue.capacity}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="font-semibold text-blue-600">
                      {venue.priceRange}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {venue.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need help finding the perfect venue? Our venue specialists are here
            to assist you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Speak with Venue Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
