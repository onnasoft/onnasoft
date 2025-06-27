"use client";

interface ShareButtonProps {
  readonly url: string;
}

export default function ShareButton({ url }: ShareButtonProps) {
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <button
      name="copy-link-button"
      onClick={handleCopyLink}
      className="text-gray-400 hover:text-onnasoft-pink transition-colors"
    >
      <i className="fas fa-link text-lg"></i>
    </button>
  );
}
