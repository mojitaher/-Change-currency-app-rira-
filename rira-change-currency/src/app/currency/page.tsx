"use client";
import { useLang } from "@/context/contexLang";
import { usePrice } from "@/context/contextPrice";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeCurrency() {
  const { t } = useTranslation();
  const { lang, toggleLang } = useLang();
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
      <button
        onClick={toggleLang}
        className="flex items-center gap-2 px-3 py-2 rounded-full
                 bg-gradient-to-r from-green-500 to-teal-600  border border-gray-300 
                 text-white cursor-pointer
                 hover:bg-green-50 hover:border-green-400 
                 shadow-sm transition-all duration-200 m-5"
      >
        {lang == "en" ? "en" : "fa"}
      </button>
      <div className="bg-green-700 text-white text-xl font-bold p-4 rounded-t-lg">
        {t("title")}
      </div>

      <div className="bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-gray-700">
          {t("currentPrice")}: <span className="text-green-600">${price}</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              {t("dollarPrice")}
            </label>
            <input
              type="number"
              placeholder={t("placeholderDollor")}
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
              <p className="text-red-500 text-sm mt-1">{t("warnings.price")}</p>
            )}
          </div>
          {/* amount */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              {isDollor ? t("amountInDollar") : t("amountInRial")}
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                id="amount"
                type="number"
                value={amount}
                placeholder={t("placeholderAmount")}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className={`w-full sm:w-[120px] px-3 py-2 text-white font-semibold text-center rounded ${
                  isDollor ? "bg-green-600" : "bg-blue-700"
                }`}
              >
                {isDollor ? "$" : t("rial")}
              </span>
            </div>
            {(!amount || amount.toString().startsWith("0")) && (
              <p className="text-red-500 text-sm mt-1">
                {t("warnings.amount")}
              </p>
            )}
          </div>

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
              {t("calculate")}
            </button>

            <button
              type="button"
              onClick={handleChange}
              className="flex-1 border border-green-600 text-green-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded-lg transition"
            >
              {t("exchange")}
            </button>
          </div>

          {resault !== null && (
            <div className="mt-4 bg-gray-100 border border-gray-300 rounded-lg p-4 text-center text-lg font-semibold text-gray-800">
              {t("result")}:{" "}
              <span
                className={`${isDollor ? "text-green-600" : "text-blue-700"}`}
              >
                {resault.toLocaleString()} {isDollor ? t("rial") : "$"}
              </span>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
