import { db } from "../_utils/firebase";
import { doc, collection, getDoc, getDocs, setDoc, addDoc, query, docRef, docSnap } from "firebase/firestore";

export async function getItems(userId) {
    try {
      const docRef = collection(db, "users", userId, "items");
      
      const docSnap = await getDocs(docRef);
      
      const items = docSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      return items;

    } catch (error) {
      console.error("Error getting items: ", error);
      throw error;
    }
  }
  
  export async function addItem(userId, item) {
    try {
      const itemsRef = collection(db, "users", userId, "items");
      
      const docRef = await addDoc(itemsRef, item);
      
      return docRef.id;
    } catch (error) {
      console.error("Error adding item: ", error);
      throw error;
    }
  }

  export async function loadItems(userId, setItems) {
    try {
      const items = await getItems(userId);
      setItems(items);
    } catch (error) {
      console.error("Load failed:", error);
      setItems([]);
    }
  }