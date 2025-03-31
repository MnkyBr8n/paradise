import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Fiddle Leaf Fig", price: 29.99, category: "Trees", image: "/images/fiddle-leaf.jpg" },
  { id: 2, name: "Areca Palm", price: 34.99, category: "Trees", image: "/images/areca-palm.jpg" },
  { id: 3, name: "Peace Lily", price: 19.99, category: "Flowers", image: "/images/peace-lily.jpg" },
  { id: 4, name: "Orchid", price: 24.99, category: "Flowers", image: "/images/orchid.jpg" },
  { id: 5, name: "Aloe Vera", price: 14.99, category: "Succulents", image: "/images/aloe-vera.jpg" },
  { id: 6, name: "Jade Plant", price: 16.99, category: "Succulents", image: "/images/jade-plant.jpg" }
];

function ProductPage() {
  const { addToCart } = useCart();
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Browse Plants</h2>
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map(product => (
              <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="text-green-600 font-semibold">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;