export default function RelatedPosts() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"
            alt="DevOps Best Practices"
          />
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                DevOps
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              <a
                href="#"
                className="hover:text-onnasoft-pink transition-colors"
              >
                DevOps Best Practices for Cloud-Native Applications
              </a>
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Discover how to implement effective DevOps practices when building
              and deploying cloud-native applications...
            </p>
            <div className="flex items-center text-xs text-gray-500">
              <span>Ana Martinez</span>
              <span className="mx-2">•</span>
              <span>March 10, 2024</span>
            </div>
          </div>
        </article>

        <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"
            alt="Microservices Architecture"
          />
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Architecture
              </span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              <a
                href="#"
                className="hover:text-onnasoft-pink transition-colors"
              >
                Microservices Architecture: When and How to Implement
              </a>
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Learn about the benefits and challenges of microservices
              architecture and when it's the right choice for your project...
            </p>
            <div className="flex items-center text-xs text-gray-500">
              <span>David Chen</span>
              <span className="mx-2">•</span>
              <span>March 8, 2024</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
