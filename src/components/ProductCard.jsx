import { toast } from "react-toastify";

const iconMap = {
  package: "/package.png",
  rocket: "/rocket.png",
  play: "/play.png",
  user: "/user.png",
};

const tagColors = {
  popular: "bg-orange-100 text-orange-600",
  new: "bg-green-100 text-green-600",
  "best seller": "bg-blue-100 text-blue-600",
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in cart!`);
      return;
    }
    onAddToCart(product);
    toast.success(`✅ ${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col border border-gray-100 hover:-translate-y-1 transition-transform">
      {/* Top Row: Icon + Tag */}
      <div className="flex items-center justify-between mb-3">
        <img
          src={iconMap[product.icon] || "/package.png"}
          alt={product.name}
          className="w-10 h-10 object-contain"
        />
        {product.tag && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[product.tagType] || "bg-gray-100 text-gray-600"}`}>
            {product.tag}
          </span>
        )}
      </div>

      {/* Name & Description */}
      <h3 className="font-bold text-gray-800 text-base mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed flex-1">{product.description}</p>

      {/* Features */}
      <ul className="mb-4 space-y-1">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-[#7B2FF7] font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="flex items-end gap-1 mb-4">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm mb-1">/{product.period}</span>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
          isInCart
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-[#7B2FF7] text-white hover:bg-[#6822e0] active:scale-95"
        }`}
      >
        {isInCart ? "Added to Cart ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;