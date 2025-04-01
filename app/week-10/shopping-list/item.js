export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="max-w-sm text-white cursor-pointer hover:text-orange-500 hover:bg-stone-700 bg-stone-500 p-2 m-2 rounded-lg transition-colors duration-200"
            onClick={() => onSelect(name)}
        >
            <h2 className="font-bold text-xl text-white">{name}</h2>
            <p className="text-white text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}
