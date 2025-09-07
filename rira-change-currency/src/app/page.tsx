"use client";
import { usePrice } from "@/context/contextPrice";
import Link from "next/link";

export default function Home() {
  const { price, setPrice } = usePrice();
  return (
    <>
      <div>current price {price}</div>
      <input
        type="number"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <Link href={"/currency"}>main route</Link>
    </>
  );
}
