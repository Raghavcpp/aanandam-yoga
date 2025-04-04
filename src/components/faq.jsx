import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-green-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-700 text-center">Frequently <span className="text-orange-500">Asked Questions</span></h2>

        {/* FAQ List */}
        <div className="mt-8 space-y-6">
          {["What are the benefits of yoga?", "What should I bring to class?", "Do I need prior experience?"].map((question, index) => (
            <div key={index} className="collapse bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-green-700">{question}</div>
              <div className="collapse-content text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
