import API_BASE_URL from "./api";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const sendContactMessage = async (payload: ContactPayload) => {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "Could not reach the server. Please check your connection and try again.",
    );
  }

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error?.[0]?.message || "Failed to send message.");
  }

  return response.json();
};
