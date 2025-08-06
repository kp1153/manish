import {
  Users,
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Leadership Summit in Jaipur",
      client: "Fortune 500 Technology Company",
      location: "Jaipur, Rajasthan",
      attendees: 200,
      duration: "3 Days",
      image: "/placeholder-case-1.jpg",
      challenge:
        "Organize a high-impact leadership summit with simultaneous translation and premium catering for global executives.",
      solution:
        "Full-service conference production with heritage venue, professional staging, and multilingual support.",
      results: [
        "98% attendee satisfaction rate",
        "Seamless execution across 3 days",
        "Zero technical issues during presentations",
        "15% increase in leadership engagement scores",
      ],
      testimonial: {
        text: "Connektpro delivered an exceptional leadership summit that exceeded our expectations. The attention to detail and professional execution was remarkable.",
        author: "Sarah Chen",
        position: "VP, Global Operations",
      },
    },
    {
      id: 2,
      title: "Sales Incentive Trip to Rishikesh",
      client: "Leading Pharmaceutical Company",
      location: "Rishikesh, Uttarakhand",
      attendees: 85,
      duration: "4 Days",
      image: "/placeholder-case-2.jpg",
      challenge:
        "Create a memorable incentive program for top sales performers combining adventure activities with team building.",
      solution:
        "Custom adventure program with luxury accommodation, team-building activities, and branded event experiences.",
      results: [
        "100% participant engagement",
        "Record-high team satisfaction scores",
        "Strengthened inter-department relationships",
        "25% boost in quarterly sales motivation",
      ],
      testimonial: {
        text: "The Rishikesh incentive trip was a game-changer for our sales team. The adventure activities and networking opportunities created lasting bonds.",
        author: "Rajesh Kumar",
        position: "National Sales Director",
      },
    },
    {
      id: 3,
      title: "Annual Conference in Goa",
      client: "International Consulting Firm",
      location: "Goa",
      attendees: 350,
      duration: "2 Days",
      image: "/placeholder-case-3.jpg",
      challenge:
        "Host annual conference for global team with focus on innovation and company culture in a relaxed coastal setting.",
      solution:
        "Beachfront resort conference with innovative staging, interactive workshops, and cultural entertainment.",
      results: [
        "95% knowledge retention rate",
        "Enhanced global team connectivity",
        "Successful product launch presentation",
        "20% improvement in company culture metrics",
      ],
      testimonial: {
        text: "Our Goa conference was perfectly executed. The coastal venue created the ideal atmosphere for innovation discussions and team bonding.",
        author: "Michael Thompson",
        position: "Global HR Director",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Discover how we've helped leading
            companies create memorable corporate experiences that drive business
            outcomes.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Case Study Header */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    {study.title}
                  </h3>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="font-semibold text-slate-800">
                      {study.attendees}
                    </div>
                    <div className="text-xs text-gray-600">Attendees</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="font-semibold text-slate-800">
                      {study.duration}
                    </div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="font-semibold text-slate-800">
                      {study.location}
                    </div>
                    <div className="text-xs text-gray-600">Location</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    Key Results:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {study.results.map((result, rIndex) => (
                      <li
                        key={rIndex}
                        className="flex items-start text-gray-700"
                      >
                        <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-gray-800 italic mb-4">
                    "{study.testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-slate-800">
                      {study.testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {study.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-br from-blue-100 to-slate-200 h-80 lg:h-96 flex items-center justify-center">
                    <div className="text-center text-slate-600">
                      <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                      <p className="text-lg font-medium">{study.title}</p>
                      <p className="text-sm">
                        {study.location} • {study.attendees} Attendees
                      </p>
                    </div>
                  </div>
                  {/* Overlay with stats */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex justify-between text-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">
                          {study.attendees}
                        </div>
                        <div className="text-xs">Attendees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">
                          {study.duration}
                        </div>
                        <div className="text-xs">Event</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-slate-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed
            their corporate events with our professional MICE services and
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
