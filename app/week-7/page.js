"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

    return (
      <main className="bg-stone-800 min-h-screen p-4">
        <h2 className="text-3xl font-bold p-2 text-white " >Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
    );
  }