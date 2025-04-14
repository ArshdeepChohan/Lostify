// components/ItemCard.tsx
interface Item {
    name: string;
    description: string;
  }
  
  const ItemCard = ({ item }: { item: Item }) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
          Contact Owner
        </button>
      </div>
    );
  };
  
  export default ItemCard;
  