import React from "react";

const Funds = () => {
  const paymentMethods = [
    {
      title: "Credit/Debit Card",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      icon: "/card-icons.png",
    },
    {
      title: "Cryptocurrency Deposit",
      fee: "$0 FEE",
      timing: "1 Hour",
      icon: "/crypto-icons.png",
      promotion: true,
    },
    {
      title: "Apple Pay/Google Pay",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      icon: "/applepay-googlepay.png",
    },
    {
      title: "International Bank Transfer",
      fee: "$0 FEE",
      timing: "2-5 BUSINESS DAY/S",
      icon: "/swift-icon.png",
    },
    {
      title: "Broker to Broker Transfer",
      fee: "$0* FEE",
      timing: "3-5 BUSINESS DAY/S",
      icon: "/broker-icon.png",
    },
    {
      title: "Volet",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      icon: "/volet-icon.png",
    },
    // Add other payment methods as needed
  ];

  return (
    <div className="w-[85%] mx-auto p-6 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img
                src={method.icon}
                alt={method.title}
                className="h-12 object-contain mb-4"
              />
              <h3 className=" font-medium text-gray-800 mb-4">
                {method.title}
              </h3>
              <div className="flex items-center justify-between w-full  text-gray-600">
                <span>{method.fee}</span>
                <span className="mx-2">|</span>
                <span className="text-xs">{method.timing}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funds;
