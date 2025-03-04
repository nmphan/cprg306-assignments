import ItemList from "./item-list";

export default function Page() {

    return (
      <main className="bg-stone-800 min-h-screen p-4">
        <h2 className="text-3xl font-bold p-2 text-white " >Shopping List</h2>
        <ItemList />
      </main>
    );
  }