import React from "react";

const Classes = () => {
  return (
    <section id="classes" className="py-16 bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700">Our <span className="text-orange-500">Yoga Classes</span></h2>
        <p className="text-lg text-gray-700 mt-4">Explore our specialized yoga sessions tailored for different needs.</p>

        {/* Classes Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* Vayayam / Pranayam */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400">
            <h3 className="text-2xl font-semibold text-green-700">Vayayam / Pranayam</h3>
            <p className="text-gray-600 mt-2">
              Breathe deeply and rejuvenate your body with guided Pranayam techniques and light exercises.
            </p>
            <button className="mt-4 btn btn-outline btn-success">Explore</button>
          </div>

          {/* Aasans for Medically Affected People */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400">
            <h3 className="text-2xl font-semibold text-green-700">Aasans for Medical Needs</h3>
            <p className="text-gray-600 mt-2">
              Special yoga for pregnant women, diabetic, and thyroid-affected individuals to improve health.
            </p>
            <button className="mt-4 btn btn-outline btn-success">Explore</button>
          </div>

          {/* Aasans with Equipment or Props */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400">
            <h3 className="text-2xl font-semibold text-green-700">Aasans with Equipment</h3>
            <p className="text-gray-600 mt-2">
              Enhance flexibility and support with yoga props like blocks, straps, and bolsters.
            </p>
            <button className="mt-4 btn btn-outline btn-success">Explore</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classes;
