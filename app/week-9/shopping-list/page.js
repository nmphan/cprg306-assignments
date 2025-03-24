"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/\p{Emoji}/gu, "");
    //console.log("Selected ingredient:", cleanedName);
    setSelectedItemName(cleanedName);
  };

  return user ? (
    <main className="bg-stone-800 p-4 min-h-screen flex gap-4">
      <section className="w-1/2">
        <h2 className="text-3xl font-bold p-2 text-white ">Shopping List</h2>
        <NewItem />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </section>
      <section className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </section>
    </main>
  ) : (
    <p>Your need to be signed in to view this page.</p>
  );
}
