import React from "react";

function Video() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://demo01.houzez.co/wp-content/uploads/2016/03/houzez-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Find Your Dream Home
          </h1>

          <p className="mb-8 text-lg text-gray-200 md:text-2xl">
            Highly Customizable Real Estate Platform for Buying,
            Selling & Renting Properties.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105">
              Explore Properties
            </button>

            <button className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default Video;