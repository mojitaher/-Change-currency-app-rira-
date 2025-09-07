"use client";
import { usePrice } from "@/context/contextPrice";
import { useState } from "react";

export default function ChangeCurrency() {
  const { price } = usePrice();
  const [isDollor, setIsDollor] = useState(true);
  const [amount, setAmount] = useState<string>("");
  const [resault, setResault] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || amount == "") return;
    if (isDollor) {
      const calc = +amount * price;
      setResault(calc);
    } else {
      const calc = +amount / price;
      setResault(calc);
    }
  };
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDollor((prev) => !prev);
  };
  return (
    <>
      <div className="bg-amber-700">change</div>
      <h1>$Price is {price}</h1>
      <form action="submit">
        <input
          id="amount"
          type="number"
          value={amount}
          placeholder="amount of money"
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="amount">{`${isDollor ? "دلار" : "ریال"}`}</label>
        <button onClick={handleSubmit}>calcute</button>
        <div>{resault}</div>
        <button onClick={handleChange}>exchange</button>
      </form>
    </>
  );
}
