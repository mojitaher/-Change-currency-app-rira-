"use client";
import { usePrice } from "@/context/contextPrice";
import Link from "next/link";

export default function Home() {
  const { price, setPrice } = usePrice();
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
        <div className="text-lg font-semibold text-gray-700">
          $$ Dollor Price: <span className="text-green-600">{price}</span>
        </div>

        <input
          type="number"
          placeholder="Enter new price"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        {price > 0 && !price.toString().startsWith("0") ? (
          <Link
            href="/currency"
            className="inline-block text-center bg-green-600 hover:bg-green-700 
                 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
          >
            go to App
          </Link>
        ) : (
          <>
            <p className="text-red-400 font-medium text-md">
              price can not be start with 0
            </p>
            <button
              disabled
              className="inline-block text-center bg-green-600 
                 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
            >
              go to App
            </button>
          </>
        )}
      </div>
    </>
  );
}
