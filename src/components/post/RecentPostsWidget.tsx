export default function RecentPostsWidget() {
  const recentPosts = [
    {
      title: "DevOps Best Practices for Cloud-Native Applications",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      title: "Microservices Architecture: When and How to Implement",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      title: "Advanced Data Analytics with Python and PySpark",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <article key={index} className="flex space-x-3">
            <img
              className="w-16 h-16 object-cover rounded"
              src={post.image}
              alt={post.title}
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                <a href="#">{post.title}</a>
              </h4>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}