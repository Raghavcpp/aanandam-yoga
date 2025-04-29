import React from "react";

const Classes = () => {
  return (
    <section id="classes" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-display font-bold text-black">Our <span className="text-black">Yoga Classes</span></h2>
        <p className="text-lg text-gray-700 mt-4">Explore our specialized yoga sessions tailored for different needs.</p>

        {/* Classes Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* Vayayam / Pranayam */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4">
            <div className="overflow-hidden">
              <img src="/images/h2-event-img1.png" alt="h2-event-img1" className="transition-transform duration-500 hover:scale-110 h-auto mb-3" />
            </div>
            <h3 className="text-2xl font-semibold text-black">yayam / Pranayam</h3>
            <p className="text-gray-600 mt-2 h-18">
              Breathe deeply and rejuvenate your body with guided Pranayam techniques and light exercises.
            </p>
            <div className="flex mt-2 px-6 pb-8 sm:px-8">
              <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
              >
                  Explore
              </a>
            </div>
          </div>

          {/* Aasans for Medically Affected People */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4">
            <div className="overflow-hidden rounded-t-full">
            <video
              src="/images/event-list-video.mp4"
              className="transition-transform duration-500 rounded-t-full hover:scale-110 h-auto mb-3"
              autoPlay
              loop
              muted
              playsInline
            />
            </div>
            <h3 className="text-2xl font-semibold text-black">Aasans for Medical Needs</h3>
            <p className="text-gray-600 mt-2 h-18">
              Special yoga for pregnant women, diabetic, and thyroid-affected individuals to improve health.
            </p>
            <div className="flex mt-2 px-6 pb-8 sm:px-8">
              <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
              >
                  Explore
              </a>
            </div>
          </div>


          {/* Aasans with Equipment or Props */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4">
            <div className="overflow-hidden">
              <img src="/images/h2-event-img3.png" alt="h2-event-img3" className="transition-transform duration-500 hover:scale-110 h-auto mb-3" />
            </div>
            <h3 className="text-2xl font-semibold text-black">Aasans with Equipment</h3>
            <p className="text-gray-600 mt-2 h-18">
              Enhance flexibility and support with yoga props like blocks, straps, and bolsters.
            </p>
            <div className="flex mt-2 px-6 pb-8 sm:px-8">
              <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
              >
                  Explore
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classes;
