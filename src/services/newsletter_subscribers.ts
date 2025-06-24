const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

interface NewsletterSubscriberArgs {
  email: string;
  locale?: string;
}

export async function subscribeToNewsletter({
  email,
  locale,
}: NewsletterSubscriberArgs) {
  const url = new URL(`${baseUrl}/api/newsletter_subscribers`);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, locale }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to subscribe");
  }

  return data;
}
