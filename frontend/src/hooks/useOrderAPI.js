import { useState } from "react";

const useOrderAPI = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sendOrder = async (orderData) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      console.log("Sending order:", orderData);

      const response = await fetch("http://localhost:5006/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...orderData,
          quantity: Number(orderData.quantity), // Ensure it's a number
        }),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (data.success) {
        setSuccessMessage("✅ Order placed successfully. We will contact you soon.");
        return true;
      } else {
        setSuccessMessage("❌ Failed to place order. Please try again.");
        return false;
      }
    } catch (error) {
      console.error("Order API error:", error);
      setSuccessMessage("⚠️ Something went wrong. Please try later.");
      return false;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return { isSubmitting, successMessage, sendOrder };
};

export default useOrderAPI;
