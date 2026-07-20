import axios from "axios";
import { api } from "./api.js";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const sendContactMessage = async (payload: ContactPayload) => {
  try {
    const { data } = await api.post("/contact", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.[0]?.message ??
        error.response?.data?.error ??
        error.message ??
        "Failed to send message.";

      throw new Error(message);
    }

    throw new Error(
      "Could not reach the server. Please check your connection and try again.",
    );
  }
};
