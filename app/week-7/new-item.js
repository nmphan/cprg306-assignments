"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem); 

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="flex flex-col w-80 m-10 p-4 bg-stone-500 rounded-lg shadow-md"
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
          <p className="pr-4">{quantity}</p>

          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="m-1 w-6 bg-orange-800 text-white font-semibold rounded-lg shadow-md hover:bg-orange-900 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-orange-700 focus:ring-opacity-75"
          >
            -
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 20}
            className="m-1 w-6 bg-orange-800 text-white font-semibold rounded-lg shadow-md hover:bg-orange-900 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-orange-700 focus:ring-opacity-75"
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
        className="p-2 m-1 bg-orange-800 text-white font-semibold rounded-lg shadow-md hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-75"
      >
        +
      </button>
    </form>
  );
}
