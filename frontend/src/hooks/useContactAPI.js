import { useState } from "react";

const useContactAPI = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sendContactForm = async (formData) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5006/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("✅ Thank you! Your message has been sent successfully.");
        return true;
      } else {
        setSuccessMessage("❌ Failed to send message. Please try again.");
        return false;
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("⚠️ Something went wrong. Please try later.");
      return false;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  return { isSubmitting, successMessage, sendContactForm };
};

export default useContactAPI;
