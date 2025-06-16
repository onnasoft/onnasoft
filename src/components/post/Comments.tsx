export default function Comments() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments (3)</h3>

      {/* Comment Form */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Leave a Comment
        </h4>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-onnasoft-pink text-white px-6 py-2 rounded-md hover:bg-onnasoft-pink-dark transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Existing Comments */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-start space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="Sarah Johnson"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h5 className="font-semibold text-gray-900">Sarah Johnson</h5>
                <span className="text-sm text-gray-500">
                  March 16, 2024 at 2:30 PM
                </span>
              </div>
              <p className="text-gray-700">
                Excellent article! We recently completed our cloud migration
                with Onnasoft and the experience was fantastic. The team really
                knows their stuff and guided us through every step of the
                process.
              </p>
              <button className="mt-2 text-sm text-onnasoft-pink hover:text-onnasoft-pink-dark">
                Reply
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-start space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="Michael Brown"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h5 className="font-semibold text-gray-900">Michael Brown</h5>
                <span className="text-sm text-gray-500">
                  March 16, 2024 at 10:15 AM
                </span>
              </div>
              <p className="text-gray-700">
                Great insights on multi-cloud strategies. We're currently
                evaluating our options and this article provides valuable
                perspective on the current trends. The automation section was
                particularly helpful.
              </p>
              <button className="mt-2 text-sm text-onnasoft-pink hover:text-onnasoft-pink-dark">
                Reply
              </button>
            </div>
          </div>
        </div>

        <div className="pb-6">
          <div className="flex items-start space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="Lisa Wang"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h5 className="font-semibold text-gray-900">Lisa Wang</h5>
                <span className="text-sm text-gray-500">
                  March 15, 2024 at 4:45 PM
                </span>
              </div>
              <p className="text-gray-700">
                The security-first approach section really resonates with our
                current challenges. Would love to see a follow-up article
                specifically focused on zero-trust implementation in cloud
                environments.
              </p>
              <button className="mt-2 text-sm text-onnasoft-pink hover:text-onnasoft-pink-dark">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
