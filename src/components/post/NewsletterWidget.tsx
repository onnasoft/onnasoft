export default function NewsletterWidget() {
  return (
    <div className="bg-primary p-6 rounded-lg text-white">
      <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-sm mb-4 text-pink-100">
        Get the latest insights and updates delivered to your inbox.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="w-full bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}