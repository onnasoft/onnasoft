const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

type GenerateResponse = {
  response: string;
};

export async function generate(prompt: string, token: string): Promise<GenerateResponse> {
  const res = await fetch(`${baseUrl}/ai/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    if (errorData.message) {
      throw new Error(errorData.message);
    }
    throw new Error("Registration failed");
  }

  const data: GenerateResponse = await res.json();

  return data;
}
