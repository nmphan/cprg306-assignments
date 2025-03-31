export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="p-2 m-4 bg-stone-500 max-w-sm rounded-lg cursor-pointer" 
            onClick={() => onSelect(name)}
        >
            <h2 className="font-bold text-xl text-white">{name}</h2>
            <p className="text-white text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}
