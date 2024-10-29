import React from "react";
import { GB as GBFlag } from "country-flag-icons/react/3x2";

const Account = () => {
  const accounts = [
    {
      id: "51602557",
      type: "MT5",
      status: "Active",
      balance: 0.0,
      credits: 0.0,
      currency: "USD",
      leverage: "500:1",
      server: "Standard STP",
      platform: "VantageInternational-Live 4",
    },
    {
      id: "51627838",
      type: "MT5",
      status: "Active",
      balance: 0.0,
      credits: 0.0,
      currency: "USD",
      leverage: "500:1",
      server: "Standard STP",
      platform: "VantageInternational-Live 4",
    },
    {
      id: "1461486",
      type: "MT5",
      status: "Inactive",
      balance: "-",
      credits: "-",
      server: "Standard STP",
      platform: "VantageInternational-Live",
    },
  ];

  return (
    <div className="w-full text-xs min-h-screen bg-gray-50 flex justify-center">
      <div className="w-[85%] max-w-[1400px] p-4">
        {/* Top Navigation - Made Responsive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4  ">
            <select className="border  rounded-md px-4 py-2 w-full sm:w-auto">
              <option>Live Account</option>
            </select>
            <select className="border rounded-md px-4 py-2 w-full sm:w-auto">
              <option>All</option>
            </select>
            <select className="border rounded-md px-4 py-2 w-full sm:w-auto">
              <option>Trading Platforms</option>
            </select>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="bg-white text-red-500  px-4 py-2 rounded-md flex items-center justify-center flex-1 sm:flex-none">
              <span className="mr-2">+</span>
              Open Account
            </button>
            <button className="p-2 border rounded-md">
              <span>⋮</span>
            </button>
          </div>
        </div>

        {/* Account Cards - Adjusted size and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accounts.map((account) => (
            <div key={account.id} className="border rounded-lg p-3 bg-white">
              {/* Account Header */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs">{account.type}</span>
                  <span className="ml-2 text-xs">{account.id}</span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    account.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {account.status}
                </span>
              </div>

              {/* Balance Display - Updated with country flag */}
              <div className="flex items-center mb-2">
                <GBFlag className="w-4 h-4 mr-1" />{" "}
                {/* Replace img with flag component */}
                <span className="text-xs font-medium">{account.balance}</span>
                <span className="ml-1 text-xs text-gray-500">
                  {account.currency}
                </span>
              </div>

              {/* Credits & Balance */}
              <div className="flex gap-4 mb-2 text-xs">
                <div>
                  <span className="text-gray-500">Credits: </span>
                  <span>{account.credits}</span>
                </div>
                <div>
                  <span className="text-gray-500">Balance: </span>
                  <span>{account.balance}</span>
                </div>
              </div>

              {/* Account Details */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                {account.leverage && <span>{account.leverage}</span>}
                {account.server && <span>• {account.server}</span>}
                {account.platform && <span>• {account.platform}</span>}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded text-xs hover:bg-gray-50">
                  Deposit
                </button>
                <button className="px-3 py-1 border rounded text-xs hover:bg-gray-50">
                  Trade
                </button>
                <button className="p-1 border rounded hover:bg-gray-50">
                  ⚙️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
