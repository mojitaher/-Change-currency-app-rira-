"use client";
import { usePrice } from "@/context/contextPrice";
import { useState } from "react";

export default function ChangeCurrency() {
  const { price, setPrice } = usePrice();
  const [isDollor, setIsDollor] = useState(true);
  const [amount, setAmount] = useState<string>("");
  const [resault, setResault] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || amount == "" || amount.toString() === "0") return;
    if (!price) {
      console.log("null");
      setResault(null);
      return;
    }
    if (isDollor) {
      const calc = +amount * price;
      setResault(calc);
    } else {
      const calc = +amount / price;
      setResault(calc);
    }
  };
  const handleChange = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDollor((prev) => !prev);
    setResault(null);
  };

  return (
    <>
      <div className="bg-green-700 text-white text-xl font-bold p-4 rounded-t-lg">
        💱 Change Currency
      </div>

      <div className="bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-gray-700">
          Current Price: <span className="text-green-600">${price}</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Price Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Dollar Price
            </label>
            <input
              type="number"
              placeholder="Enter Dollar Price"
              onChange={(e) => {
                const value = e.target.value;
                if (!value || value.startsWith("0")) setPrice(null);
                else setPrice(Number(value));
              }}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                !price
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {!price && (
              <p className="text-red-500 text-sm mt-1">
                Price cannot be empty or start with 0
              </p>
            )}
          </div>
          {/* Amount Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              {isDollor ? "Amount in Dollar" : "Amount in Rial"}
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                id="amount"
                type="number"
                value={amount}
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className={`w-full sm:w-[120px] px-3 py-2 text-white font-semibold text-center rounded ${
                  isDollor ? "bg-green-600" : "bg-blue-700"
                }`}
              >
                {isDollor ? "$" : "Rial"}
              </span>
            </div>
            {(!amount || amount.toString().startsWith("0")) && (
              <p className="text-red-500 text-sm mt-1">
                Amount cannot be empty or start with 0
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              disabled={!amount || amount.toString().startsWith("0") || !price}
              type="submit"
              className={`flex-1 py-2 px-4 rounded-lg font-semibold shadow transition ${
                !amount || amount.toString().startsWith("0") || !price
                  ? "bg-gray-400 cursor-not-allowed text-gray-100"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              Calculate
            </button>

            <button
              type="button"
              onClick={handleChange}
              className="flex-1 border border-green-600 text-green-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded-lg transition"
            >
              Exchange
            </button>
          </div>

          {/* Result */}
          {resault !== null && (
            <div className="mt-4 bg-gray-100 border border-gray-300 rounded-lg p-4 text-center text-lg font-semibold text-gray-800">
              Result:{" "}
              <span
                className={`${isDollor ? "text-green-600" : "text-blue-700"}`}
              >
                {resault.toLocaleString()} {isDollor ? "Rial" : "$"}
              </span>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
