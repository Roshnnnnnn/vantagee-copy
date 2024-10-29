import React, { useState } from "react";

const WithdrawFunds = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(value);

    if (value === 0) {
      setError("Amount cannot be 0");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    if (amount > 0) {
      alert("Continuing with withdrawal");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.707a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
            clipRule="evenodd"
          />
        </svg>
        Withdraw funds
      </h2>

      <div className="mb-4 flex ">
        <label className="block text-gray-600 font-medium text-xs">
          Account Number
        </label>
        <p className="text-gray-700 text-xs pl-2">
          51602557 - $0.00 USD - Hedge STP
        </p>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-32 p-2 text-xs text-gray-700 font-light border-b border-gray-300 focus:outline-none focus:border-gray-500"
          min="0"
        />
        <span className="text-gray-500 font-medium text-xs mx-2">MAX</span>
        <button
          onClick={handleContinue}
          className={`w-40 py-2 ml-[85px]  text-white font-semibold rounded-md float-right ${
            amount > 0
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-orange-200 cursor-not-allowed"
          }`}
          disabled={amount <= 0}
        >
          Continue
        </button>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default WithdrawFunds;
