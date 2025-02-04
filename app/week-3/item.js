export default function Item(props) {
    return (
        <li className="p-2 m-4 bg-stone-500 max-w-sm">
            <h2 className="font-bold text-xl text-white">{props.name}</h2>
            <p className="text-white text-sm">Buy {props.quantity} in {props.category}</p>
        </li>
    );
  }