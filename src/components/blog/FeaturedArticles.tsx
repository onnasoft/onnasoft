import FeaturedCard from "./FeaturedCard";

export default function FeaturedArticles() {
  const featuredArticles = [
    {
      title: "The Future of AI in Software Development",
      description: "Exploring how artificial intelligence is revolutionizing the way we build and maintain software applications.",
      category: "Tech Trends",
      date: "June 8, 2025",
      author: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      featured: true
    },
    {
      title: "Scaling Your Database for Big Data",
      description: "Best practices and strategies for handling massive datasets while maintaining performance and reliability.",
      category: "Big Data",
      date: "June 5, 2025",
      author: "David Chen",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      featured: true
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredArticles.map((article, index) => (
          <FeaturedCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}