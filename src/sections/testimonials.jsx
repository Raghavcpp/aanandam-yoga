// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import {Testimonial} from '../assets/constants'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#F7EDE4]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-display font-bold text-black">
          What Our <span className="text-black">Clients Say</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">Real stories from our happy members.</p>

        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {Testimonial.map((t, index) => (
            <StyledWrapper key={index}>
              <div className="card h-50">
                <div className="header">
                <img src={`/images/testimonials/${t.image}`} alt={t.name} className="image" />

                  <div>
                    <div className="stars">
                      {Array(t.star).fill(0).map((_, i) => (
                        <svg key={i} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="name">{t.name}</p>
                  </div>
                </div>
                <p className="message">{t.comment}</p>
              </div>
            </StyledWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    background-color: rgba(243, 244, 246, 1);
    padding: 2rem;
    max-width: 320px;
    border-radius: 10px;
    box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .header .image {
    height: 4rem;
    width: 4rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 0.125rem;
    color: rgba(34, 197, 94, 1);
  }

  .stars svg {
    height: 1rem;
    width: 1rem;
  }

  .name {
    margin-top: 0.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: rgba(55, 65, 81, 1);
  }

  .message {
    margin-top: 1rem;
    color: rgba(107, 114, 128, 1);
  }
`;

export default Testimonials;
