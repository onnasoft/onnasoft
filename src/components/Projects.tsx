import React from 'react';

const Projects: React.FC = () => {
  const sectors = [
    {
      title: 'Finance',
      description: 'Technological solutions for financial institutions, banks, and investment companies, optimizing processes and improving transaction security.',
      tags: ['Digital Banking', 'Risk Analysis', 'Security'],
      realImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Healthcare',
      description: 'Systems for the healthcare sector that improve patient management, electronic medical records, and clinical data analysis for more efficient care.',
      tags: ['Telemedicine', 'Hospital Management', 'Clinical Analysis'],
      realImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Education',
      description: 'Interactive educational platforms and digital learning tools that transform the educational experience for both students and teachers.',
      tags: ['E-learning', 'Academic Management', 'Assessment'],
      realImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'E-commerce',
      description: 'Development of online stores, payment systems, and inventory management platforms that boost sales and improve customer experience.',
      tags: ['E-commerce', 'Online Payments', 'Digital Marketing'],
      realImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Real Estate',
      description: 'Applications for the real estate sector that facilitate property search, management, and maintenance, optimizing processes for agents and clients.',
      tags: ['Real Estate', 'Smart Home', 'Property Management'],
      realImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Airlines',
      description: 'Comprehensive solutions for the airline industry, including booking systems, flight management, and customer experience optimization.',
      tags: ['Flight Management', 'Booking Systems', 'Customer Experience'],
      realImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sectors We Work With</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our experience spans across various sectors, where we apply cutting-edge technology to solve industry-specific challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div 
              key={sector.title} 
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Contenedor de imagen con título superpuesto */}
              <div className="relative h-48">
                {/* Imagen de fondo */}
                <img 
                  src={sector.realImage} 
                  alt={sector.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Título con fondo semitransparente */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                  <h3 className="text-2xl font-bold text-white text-center">{sector.title}</h3>
                </div>
              </div>
              
              {/* Contenido debajo de la imagen */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{sector.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Let's talk about your project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;