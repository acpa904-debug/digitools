import { toast } from "react-toastify";

const iconMap = {
  package: "/package.png",
  rocket: "/rocket.png",
  play: "/play.png",
  user: "/user.png",
};

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item.id);
    toast.error(`❌ ${item.name} removed from cart!`);
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <img
          src={iconMap[item.icon] || "/package.png"}
          alt={item.name}
          className="w-9 h-9 object-contain"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
          <span className="text-[#7B2FF7] font-bold text-sm">${item.price}/{item.period}</span>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;