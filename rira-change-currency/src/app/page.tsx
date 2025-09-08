"use client";
import { useLang } from "@/context/contexLang";
import { usePrice } from "@/context/contextPrice";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { price, setPrice } = usePrice();
  const { lang, toggleLang } = useLang();
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
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
        <div className="text-lg font-semibold text-gray-700">
          $$ {t("dollarPrice")}: <span className="text-green-600">{price}</span>
        </div>

        <input
          type="number"
          placeholder={t("placeholderDollor")}
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
              {t("warnings.price")}
            </p>
            <button
              disabled
              className="inline-block text-center bg-green-600 
                 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
            >
              {t("appButton")}
            </button>
          </>
        )}
      </div>
    </>
  );
}
