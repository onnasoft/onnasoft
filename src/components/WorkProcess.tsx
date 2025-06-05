import React from "react";
import {
  FaHandshake,
  FaClipboardList,
  FaCode,
  FaSearch,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin by listening to your needs and goals. In this phase, we ensure we fully understand your vision and the challenges you face.",
      icon: <FaHandshake className="text-2xl text-blue-500" />,
    },
    {
      number: "02",
      title: "Analysis and Planning",
      description:
        "We develop a detailed strategy and action plan. We define technical requirements, establish timelines, and allocate resources for your project.",
      icon: <FaClipboardList className="text-2xl text-purple-500" />,
    },
    {
      number: "03",
      title: "Development and Implementation",
      description:
        "Our team of experts works on creating your solution, applying agile methodologies to ensure quality and efficiency at every stage.",
      icon: <FaCode className="text-2xl text-green-500" />,
    },
    {
      number: "04",
      title: "Testing and Optimization",
      description:
        "We conduct thorough testing to ensure everything works perfectly. We optimize performance and refine every detail of the solution.",
      icon: <FaSearch className="text-2xl text-yellow-500" />,
    },
    {
      number: "05",
      title: "Delivery and Training",
      description:
        "We implement the final solution and provide the necessary training. Our team ensures your team is comfortable with all features and functionalities.",
      icon: <FaRocket className="text-2xl text-orange-500" />,
    },
    {
      number: "06",
      title: "Ongoing Support and Maintenance",
      description:
        "We continue to offer ongoing support to ensure long-term success. Our maintenance plans keep your solution secure, updated, and performing optimally.",
      icon: <FaHeadset className="text-2xl text-red-500" />,
    },
  ];

  return (
    <section id="process" className="section bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Work Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We follow a structured methodology that guarantees exceptional
            results in every project. Our approach combines technical precision
            with clear and constant communication.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - only visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="p-3 bg-primary bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
