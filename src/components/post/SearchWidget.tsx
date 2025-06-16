export default function SearchWidget() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">Search Blog</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
      </div>
    </div>
  );
}