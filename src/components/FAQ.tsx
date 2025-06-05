const FAQ = () => {
  const faqs = [
    {
      question: "What services does OnnaSoft offer?",
      answer:
        "OnnaSoft offers a comprehensive range of services including Programming and Web Development, API Integration, Big Data, Data Science, IT Outsourcing, and Cloud Migration. Our team of experts is equipped to handle projects of any size and complexity.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "With over 10 years of experience in the industry and more than 50 successful projects completed, our team brings extensive expertise to every project. Our professionals are certified in various technologies and continuously update their skills to stay at the forefront of technological advancements.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across multiple sectors including Finance, Healthcare, Education, E-commerce, Real Estate, and Airlines. Our diverse experience allows us to understand the unique challenges and requirements of different industries.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "We follow a structured methodology that begins with an initial consultation to understand your needs, followed by analysis and planning, development and implementation, thorough testing and optimization, and finally delivery with ongoing support. This approach ensures high-quality results and client satisfaction.",
    },
    {
      question:
        "What makes OnnaSoft different from other software development companies?",
      answer:
        "What sets us apart is our combination of technical expertise, business understanding, and commitment to results. We don't just develop software; we create solutions that transform businesses. Our client-centered approach, transparent communication, and focus on long-term partnerships ensure that we deliver value beyond the initial project.",
    },
    {
      question: "How do you ensure the quality of your deliverables?",
      answer:
        "Quality assurance is integrated into every step of our process. We implement rigorous testing protocols, code reviews, and performance optimization. We also maintain open communication with clients throughout the project to ensure that the final product meets or exceeds expectations.",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and
            expertise. If you don&#39;t see what you&#39;re looking for, feel
            free to contact us directly.
          </p>
        </div>

        <div className="mx-auto">
          {faqs.map((faq) => (
            <details
              key={faq.answer}
              className="group mb-4 rounded-lg transition-all duration-300 overflow-hidden"
            >
              <summary className="list-none cursor-pointer">
                <div className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg group-open:bg-primary group-open:bg-opacity-5 group-open:border-primary">
                  <span className="font-bold text-xl">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="p-4 bg-white border border-gray-200 border-t-0 rounded-b-lg animate-fadeIn">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Estilos para la animación */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        details[open] summary ~ * {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
