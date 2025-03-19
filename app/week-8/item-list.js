import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <text className="text-lg text-white">Sort by:</text>
        <button
          className={`p-2 m-2 w-32 rounded-lg ${
            sortBy === "name" ? "bg-orange-800 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`p-2 m-2 w-32 rounded-lg ${
            sortBy === "category" ? "bg-orange-800 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}