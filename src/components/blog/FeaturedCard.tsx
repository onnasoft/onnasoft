import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly date: string;
  readonly author: string;
  readonly image: string;
  readonly avatar: string;
  readonly featured?: boolean;
};

export default function FeaturedCard({
  title,
  description,
  category,
  date,
  author,
  image,
  avatar,
  featured = false,
}: BlogCardProps) {
  return (
    <div className="blog-card bg-white shadow-sm relative">
      <span className="featured-tag">Featured</span>
      <img
        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="The Future of AI in Software Development"
        className="blog-image"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full">
            Tech Trends
          </span>
          <span className="text-gray-500 text-sm ml-auto">June 8, 2025</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
          The Future of AI in Software Development
        </h3>
        <p className="text-gray-600 mb-4">
          Exploring how artificial intelligence is revolutionizing the way we
          build and maintain software applications.
        </p>
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Maria Rodriguez"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-gray-700">Maria Rodriguez</span>
          <a href="blog/post" className="ml-auto text-primary hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
