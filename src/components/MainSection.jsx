import { useState } from "react";
import { toast } from "react-toastify";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

const MainSection = ({ cartItems, onAddToCart, onRemoveFromCart, onCheckout }) => {
  const [activeTab, setActiveTab] = useState("products");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }
    onCheckout();
    toast.success("🎉 Checkout successful! Thank you for your purchase!");
  };

  return (
    <section id="products" className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Premium Digital Tools</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Everything you need to streamline your workflow and grow faster.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              activeTab === "products"
                ? "bg-[#7B2FF7] text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#7B2FF7]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              activeTab === "cart"
                ? "bg-[#7B2FF7] text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#7B2FF7]"
            }`}
          >
            Cart
            {cartItems.length > 0 && (
              <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                activeTab === "cart" ? "bg-white text-[#7B2FF7]" : "bg-[#7B2FF7] text-white"
              }`}>
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === "cart" && (
          <div className="max-w-xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-gray-700 font-bold text-lg mb-2">Your Cart is Empty</h3>
                <p className="text-gray-400 text-sm">Add some products to get started!</p>
                <button
                  onClick={() => setActiveTab("products")}
                  className="mt-4 bg-[#7B2FF7] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#6822e0]"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 text-lg mb-4">Your Cart ({cartItems.length} items)</h3>
                <div className="space-y-3 mb-5">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={onRemoveFromCart} />
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-semibold">Total</span>
                  <span className="text-[#7B2FF7] font-extrabold text-xl">${total}</span>
                </div>

                {/* Checkout */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#7B2FF7] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#6822e0] transition-colors active:scale-95"
                >
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;