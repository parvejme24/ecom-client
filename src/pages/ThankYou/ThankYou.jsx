import React from "react";

const ThankYouPage = ({ orderDetails }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>

      {orderDetails ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <p>
            <span className="font-bold">Order Number:</span>{" "}
            {orderDetails.orderNumber}
          </p>
          <p>
            <span className="font-bold">Total Amount:</span> $
            {orderDetails.totalAmount.toFixed(2)}
          </p>
          <p>
            <span className="font-bold">Shipping Address:</span>{" "}
            {orderDetails.shippingAddress}
          </p>
          <p>
            <span className="font-bold">Email:</span> {orderDetails.email}
          </p>
        </div>
      ) : (
        <p>
          There was an error processing your order. Please contact customer
          support for assistance.
        </p>
      )}
    </div>
  );
};

export default ThankYouPage;
