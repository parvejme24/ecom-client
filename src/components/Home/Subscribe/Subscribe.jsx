import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add logic to handle subscription (e.g., send email to the server)
    console.log(`Subscribed with email: ${email}`);
    // Clear the email input after submission
    setEmail("");
  };

  return (
    <div className="container mx-auto bg-blue-500 py-12 my-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">
          Stay up-to-date with the latest news and promotions!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex items-center justify-center"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 mr-2 rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-200 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
