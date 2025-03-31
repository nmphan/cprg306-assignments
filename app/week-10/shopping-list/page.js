"use client";
import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const loadItems = async () => {
      try {
        setLoading(true);
        const items = await getItems(user.uid);
        setItems(items);
      } catch (error) {
        console.error("Failed to load items:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;
    
    try {
      await addItem(user.uid, newItem);
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

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
        <NewItem onAddItem={handleAddItem} />
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


