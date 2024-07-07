import { useState } from "react";
import wretch from "wretch";

export default function useSubmitContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const api = wretch("/api/submit-form").resolve((r) => r.json());

  async function submitForm<T>(data: T) {
    setIsLoading(true);

    try {
      const response = await api.post(data);

      return response;
    } catch (error) {
      //TODO: Handle Error
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    submitForm,
  };
}
