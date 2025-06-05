import React from "react";
import {
  FaRocket,
  FaStoreAlt,
  FaBuilding,
  FaLandmark,
  FaHandsHelping,
  FaSchool,
} from "react-icons/fa";

const ClientTypes: React.FC = () => {
  const clientTypes = [
    {
      title: "Startups & Entrepreneurs",
      description:
        "Perfect for new ventures looking to establish their digital presence quickly and efficiently. Our scalable solutions grow with your business, ensuring you only pay for what you need while maintaining the flexibility to expand.",
      icon: <FaRocket className="text-3xl text-blue-500" />,
    },
    {
      title: "Small & Medium Businesses",
      description:
        "Ideal for established businesses looking to optimize operations, improve customer experience, or expand their digital capabilities. Our solutions help you compete effectively with larger enterprises without the enterprise-level costs.",
      icon: <FaStoreAlt className="text-3xl text-green-500" />,
    },
    {
      title: "Enterprise Organizations",
      description:
        "For large organizations seeking digital transformation, system integration, or custom solutions at scale. Our enterprise-grade services ensure security, compliance, and seamless integration with your existing infrastructure.",
      icon: <FaBuilding className="text-3xl text-purple-500" />,
    },
    {
      title: "Government & Public Sector",
      description:
        "Specialized solutions for government agencies and public institutions that require high security, compliance with regulations, and systems that can handle large-scale data processing and citizen services.",
      icon: <FaLandmark className="text-3xl text-red-500" />,
    },
    {
      title: "Non-Profit Organizations",
      description:
        "Tailored solutions for non-profits that maximize impact while minimizing costs. We help you leverage technology to further your mission, improve donor engagement, and streamline operations with special pricing for qualified organizations.",
      icon: <FaHandsHelping className="text-3xl text-amber-500" />,
    },
    {
      title: "Educational Institutions",
      description:
        "Digital solutions for schools, colleges, and universities that enhance learning experiences, streamline administrative processes, and facilitate remote education with secure, user-friendly platforms.",
      icon: <FaSchool className="text-3xl text-indigo-500" />,
    },
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Who Can Benefit From Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With over 10 years of experience and more than 50 successful
            projects, we've helped a wide range of clients transform their
            businesses through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((clientType, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 p-4 bg-primary bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center">
                {clientType.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {clientType.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {clientType.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;
