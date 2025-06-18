import React from "react";
import { translations } from "./translations";

interface TechnologyProps {
  readonly language: string;
}

const TechStack: React.FC<TechnologyProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-down">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="space-y-12">
          {t.technologies.map((category) => (
            <div key={category.category}>
              <h3 className=" text-2xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-primary-light text-white rounded-full w-14 h-14 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className=" font-bold text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </h4>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center w-full">
                      <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {tech.tooltip}
                        <svg
                          className="absolute text-gray-800 h-2 w-full left-0 top-full"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
