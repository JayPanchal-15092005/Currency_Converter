import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const API_KEY = "a3276dd9544f4c199e1eeb7c7c4e5eb6";
  const API_URL = `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, []);

  const convertCurrency = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const result = (amount / rates[fromCurrency]) * rates[toCurrency];
      setConvertedAmount(result.toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center backdrop-blur-md bg-opacity-90">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Currency Converter</h2>
        
        <div className="flex flex-col space-y-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="border border-gray-300 p-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-between">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="border border-gray-300 p-2 rounded-md bg-white w-1/2 text-gray-700"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="border border-gray-300 p-2 rounded-md bg-white w-1/2 text-gray-700"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={convertCurrency}
            className="bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Convert
          </button>

          {convertedAmount !== null && (
            <h3 className="text-xl font-semibold text-gray-800 mt-3">
              Converted Amount: <span className="text-green-500">{convertedAmount} {toCurrency}</span>
            </h3>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CurrencyConverter;
