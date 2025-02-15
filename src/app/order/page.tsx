"use client"; // This tells Next.js to treat this as a client component
import { useState } from "react";

export default function Order() {
  // State to handle form fields
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [cakeType, setCakeType] = useState("");
  const [cakeSize, setCakeSize] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [orderStatus, setOrderStatus] = useState("Pending"); // Default value for order status
  const [successMessage, setSuccessMessage] = useState(false); // To show success message

  // Handle form submit
  const submitOrder = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect the form data
    const formData = {
      customerName,
      customerEmail,
      customerPhone,
      cakeType,
      cakeSize,
      deliveryDate,
      specialInstructions,
      orderStatus,
    };

    console.log("Form Data:", JSON.stringify(formData));
    const functionURL = process.env.NEXT_PUBLIC_FunctionURL;
    if (!functionURL) {
      console.error("Function URL not found in environment variables!");
      return;
    }

    console.log("Function URL:", functionURL); // Log for debugging
    try {
      // Send POST request using Fetch API
      const response = await fetch(functionURL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      if (response.ok) {
        const data = await response.json();
        console.log("Server response:", data);

        // Show success message
        setSuccessMessage(true);
        resetForm(); // Reset the form after successful submission
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert(
          "There was an issue with your order: " +
            (errorData.message || "Please try again later.")
        );
      }
    } catch (error) {
      // Handle network or fetch errors
      console.error("Request failed:", error);
      alert(
        "There was a network error. Please check your connection and try again."
      );
    }
  };

  // Reset form fields after successful submission
  const resetForm = () => {
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setCakeType("");
    setCakeSize("");
    setDeliveryDate("");
    setSpecialInstructions("");
    setOrderStatus("Pending");
  };

  return (
    <section
      id="order"
      className="widescreen:section-min-height tallscreen:section-min-height my-8 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Order Form
      </h2>
      <form id="orderForm" onSubmit={submitOrder}>
        <div className="mb-4">
          <label
            htmlFor="customerName"
            className="block text-gray-700 font-medium"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="customerEmail"
            className="block text-gray-700 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="customerPhone"
            className="block text-gray-700 font-medium"
          >
            Phone
          </label>
          <input
            type="text"
            id="customerPhone"
            name="customerPhone"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cakeType" className="block text-gray-700 font-medium">
            Cake Type
          </label>
          <select
            id="cakeType"
            name="cakeType"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cakeType}
            onChange={(e) => setCakeType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Cake Type
            </option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Carrot">Carrot</option>
            <option value="Lemon">Lemon</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="cakeSize" className="block text-gray-700 font-medium">
            Cake Size
          </label>
          <select
            id="cakeSize"
            name="cakeSize"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cakeSize}
            onChange={(e) => setCakeSize(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Cake Size
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="deliveryDate"
            className="block text-gray-700 font-medium"
          >
            Delivery Date
          </label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="specialInstructions"
            className="block text-gray-700 font-medium"
          >
            Special Instructions
          </label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <div
          id="successMessage"
          className="fixed top-[4rem] left-0 right-0 mt-4 mx-auto w-full max-w-lg bg-green-500 text-white text-center p-4 rounded-md shadow-lg"
        >
          Order has been successfully submitted!
        </div>
      )}
    </section>
  );
}
