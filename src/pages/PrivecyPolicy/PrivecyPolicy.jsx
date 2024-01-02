import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <p>
        Welcome to [Your Company Name]! This Privacy Policy outlines how we
        collect, use, and protect your personal information when you use our
        website and services.
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Information We Collect</h2>
      <p>
        We may collect various types of information, including but not limited
        to:
        <ul className="list-disc pl-8">
          <li>
            Personal information such as name, email address, and contact
            details.
          </li>
          <li>Payment information for processing orders.</li>
          <li>
            Device and usage information for analytics and improvement of our
            services.
          </li>
        </ul>
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">
        How We Use Your Information
      </h2>
      <p>
        We use the collected information for purposes such as:
        <ul className="list-disc pl-8">
          <li>Processing and fulfilling orders.</li>
          <li>
            Communicating with you regarding your purchases and inquiries.
          </li>
          <li>
            Improving our website and services based on user feedback and
            behavior.
          </li>
        </ul>
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Data Security</h2>
      <p>
        We prioritize the security of your information and take measures to
        protect it from unauthorized access or disclosure. However, no method of
        transmission over the internet or electronic storage is completely
        secure.
      </p>

      <h2 className="text-lg font-bold mt-4 mb-2">Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. You can choose to
        disable cookies in your browser settings, but this may affect the
        functionality of our website.
      </p>

      {/* Add more sections and details as needed for your privacy policy */}
    </div>
  );
};

export default PrivacyPolicyPage;
