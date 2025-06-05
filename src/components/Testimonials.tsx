import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "OnnaSoft was key to getting our Odoo infrastructure up and running. Their technical expertise and responsiveness helped us launch Eclosión IR smoothly and on time.",
      author: "Carlos Navarrete",
      position: "Founder, Eclosión IT",
      rating: 5,
    },
    {
      quote:
        "Working with OnnaSoft made all the difference. Although they joined us as backend developers, they proactively set up and optimized our AWS infrastructure, ensuring a robust and scalable environment.",
      author: "Andrea Gutiérrez",
      position: "Technical Lead, Confidential Project",
      rating: 5,
    },
    {
      quote:
        "We’ve partnered with OnnaSoft on multiple education-focused projects. From building data pipelines to developing software for faculty and student assessment, their work has always been efficient and impactful.",
      author: "Roberto Morales",
      position: "Academic Technology Consultant",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < rating ? "text-primary" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ));
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in the positive impact our solutions have on our
            clients' businesses. Their satisfaction is our best indicator of
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex text-primary mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
