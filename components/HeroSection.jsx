import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Elevating <span className="text-blue-400">MICE</span> Experience
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Delivering Seamless Corporate Events, Globally
              </p>
              <p className="text-lg text-gray-300">
                Tailored Incentive Travel & Business Conferences with Impact
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                Plan Your Next Conference
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
                Schedule a Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">200+</div>
                <div className="text-gray-300 text-sm">Corporate Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-300 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">6</div>
                <div className="text-gray-300 text-sm">MICE Destinations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-blue-100 to-slate-200 h-80 lg:h-96 flex items-center justify-center">
                {/* Placeholder for hero image/video */}
                <div className="text-center text-slate-600">
                  <Play className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-lg font-medium">
                    Corporate Event Showcase Video
                  </p>
                  <p className="text-sm">
                    Conference • Incentive Travel • Meetings
                  </p>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all">
                  <Play className="w-8 h-8 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
