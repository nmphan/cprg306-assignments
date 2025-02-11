"use client";
import { useState } from "react";
import Item from "../week-3/item";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <main className="bg-stone-800 min-h-screen p-4 flex justify-center items-center">
      <section className="p-1 text-center bg-white flex items-center justify-center w-70">
        <p className="pr-10 items-center">{quantity}</p>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className="m-1 w-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="m-1 w-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
        >
          -
        </button>
      </section>
    </main>
  );
}
