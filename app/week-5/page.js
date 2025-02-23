"use client";
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = new NewItem(name, quantity, category);

    console.log(item.name, item.quantity, item.category);

    alert(
      `Added item: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );
  };

  return (
    <main className="bg-stone-800 p-4 min-h-screen">
      <form
        className="flex flex-col w-80 m-auto p-4 bg-stone-500 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="m-1 p-2 rounded-lg"
          required
        />

        <section className="flex items-center justify-between">
          <section className="bg-white flex items-center m-1 rounded-lg p-1">
            <p className="pr-4 items-center">{quantity}</p>

            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className="m-1 w-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
            >
              -
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={quantity >= 20}
              className="m-1 w-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
            >
              +
            </button>
          </section>

          <section>
            <select
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="m-1 p-2 rounded-lg"
            >
              <option value="category" disabled>
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen goods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </section>
        </section>

        <button
          type="submit"
          className="p-2 m-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
