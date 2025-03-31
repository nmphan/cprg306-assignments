import { db } from "../_utils/firebase";
import { doc, collection, getDoc, getDocs, setDoc, addDoc, query, docRef, docSnap } from "firebase/firestore";

// export const getItems = async (userId) => {
//     try {
//         const docRef = doc(db, "shopping-list", userId); 
//         const docSnap = await getDoc(docRef);   
    
//     if (docSnap.exists()) {
//         const items = {userId: docSnap.id, ...docSnap.data()};
//         return items; 
//     }
//     else {
//         return null;
//     }
// }
// catch (error) {
//     console.error("Error getting items:", error);
//     return null;
// }
// }

// export const addItems = async (item) => {
//     try {
//         const docRef = await addDoc(collection(db, "shopping-list"), item);
//         return docRef.id;
//     }
//     catch (error) {
//         console.error("Error adding item:", error);
//         return null;
//     }
// }


export async function getItems(userId) {
    try {
      // Reference to the user's items subcollection
      const itemsRef = collection(db, "users", userId, "items");
      
      // Get all documents in the subcollection
      const querySnapshot = await getDocs(itemsRef);
      
      // Map documents to an array of objects with id and data
      const items = querySnapshot.docs.map(doc => ({
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
      // Reference to the user's items subcollection
      const itemsRef = collection(db, "users", userId, "items");
      
      // Add the new item document
      const docRef = await addDoc(itemsRef, item);
      
      // Return the new document ID
      return docRef.id;
    } catch (error) {
      console.error("Error adding item: ", error);
      throw error;
    }
  }

// export const loadItems = async () => {
//     try {
//         const itemColectionRef = collection(db, "shopping-list");
//         const itemsSnapshot = await getDocs(itemColectionRef);
        
//         const mappedItems = itemsSnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//         }));
//         return mappedItems;
//     }
//     catch (error) {
//         console.error("Error loading items:", error);
//         return null;
//     }
// }
