import React, { useState } from "react";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      comment:
        "Amazing products! I love the quality and performance of the smart gadgets I purchased.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "Fast shipping and excellent customer service. Will definitely buy from here again!",
    },
    {
      id: 3,
      name: "Alex Johnson",
      comment:
        "The wireless earbuds are a game-changer. Great sound quality and comfortable to wear.",
    },
  ]);

  return (
    <div className="container mx-auto mt-8">
      <div className="mt-8">
        <h2 className="text-3xl text-center font-bold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-500">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
