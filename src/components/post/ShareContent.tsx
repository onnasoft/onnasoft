"use server";

export default async function ShareContent() {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Share this article:</span>
          <div className="flex space-x-2">
            <a
              href="#"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fas fa-link text-lg"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <i className="fas fa-eye mr-2"></i>
            1,247 views
          </span>
          <span className="flex items-center">
            <i className="fas fa-heart mr-2"></i>
            89 likes
          </span>
        </div>
      </div>
    </footer>
  );
}
