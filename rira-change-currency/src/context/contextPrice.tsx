"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
type priceType = {
  price: number;
  setPrice: (value: number) => void;
};

const PriceContext = createContext<priceType | null>(null);
export default function PriceProvider({ children }: { children: ReactNode }) {
  const [price, setPrice] = useState(0);

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
}
export function usePrice() {
  const context = useContext(PriceContext);
  if (!context) return;
  return context;
}
