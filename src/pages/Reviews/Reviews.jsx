import React, { useState } from "react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Amazing Smart Gadget!",
      content:
        "I purchased a smartphone from this website, and it exceeded my expectations. The features and performance are top-notch.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Great Customer Service",
      content:
        "I had an issue with my order, but the customer service team was quick to resolve it. Excellent service!",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Quality Products",
      content:
        "I've bought multiple gadgets from this website, and the quality is consistently high. Highly recommended!",
      author: "Alex Johnson",
    },
  ]);

  const [selectedReview, setSelectedReview] = useState(null);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ul className="divide-y divide-gray-300">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="cursor-pointer py-4"
                onClick={() => handleReviewClick(review)}
              >
                <h2 className="text-lg font-bold mb-2">{review.title}</h2>
                <p className="text-gray-600">{review.content}</p>
                <p className="text-sm text-gray-500 mt-2">- {review.author}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1">
          {selectedReview && (
            <div>
              <h2 className="text-xl font-bold mb-4">Selected Review</h2>
              <h3 className="text-lg font-bold mb-2">{selectedReview.title}</h3>
              <p className="text-gray-600">{selectedReview.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                - {selectedReview.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
