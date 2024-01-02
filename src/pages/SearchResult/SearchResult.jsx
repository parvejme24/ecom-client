import React, { useState } from "react";

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Smartphone",
      description:
        "The latest smartphone with advanced features and high-quality camera.",
      price: 499.99,
    },
    {
      id: 2,
      name: "Smartwatch",
      description:
        "A stylish and functional smartwatch with health and fitness tracking.",
      price: 199.99,
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      description:
        "High-quality wireless earbuds with noise-canceling technology.",
      price: 79.99,
    },
  ]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      {searchResults.length === 0 ? (
        <p>No results found. Please try a different search term.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="flex items-center justify-between py-4"
            >
              <div>
                <h2 className="text-lg font-bold mb-2">{result.name}</h2>
                <p className="text-gray-600">{result.description}</p>
              </div>
              <div>
                <p className="text-lg font-bold">${result.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultPage;
