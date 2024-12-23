
import React, { useState } from "react";
import { menu_list, food_list } from "../../assets/assets"; // Import your menu and food data
import Globe from "../glove/Globe";
import Newiteam from "../../pages/home/newiteam/newiteam";
const ExploreMenu = () => {
  const [category, setCategory] = useState("All"); // Default category is 'All'
  const [cart, setCart] = useState([]); // Cart state to store selected items
  const [isCartVisible, setIsCartVisible] = useState(false); // Toggle cart visibility

  // Filter food items based on the selected category
  const filteredFood = food_list.filter(
    (food) => category === "All" || food.category === category
  );

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter((cartItem) => cartItem._id !== item._id);
    });
  };

  // Calculate total bill
  const totalBill = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <div className="">
      
        <Globe />
        < Newiteam/>
      </div>
      <h1 className="text-4xl font-bold flex justify-center hover:underline">
        <strong className="text-6xl">Explore</strong> Our Menu
      </h1>
      <p className="explore-menu-text font-thin text-2xl pt-10">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Cart Icon */}
      <div className="fixed top-4 right-4 z-9999">
        <button
          onClick={() => setIsCartVisible(!isCartVisible)}
          className=" text-white p-4 rounded-full shadow-md flex items-center justify-center relative font-bold mr-5 mt-5"
        >
          🛒 {/* Cart Icon */}
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart Drawer */}
      {isCartVisible && (
        <div className="fixed top-24 right-12 bg-gray-100 p-6 rounded-lg shadow-lg w-80 z-50">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item._id} className="flex justify-between items-center">
                 <img  className="h-10 w-10 rounded-lg"src={item.image} alt="" />

                  <p className="font-semibold">{item.name}</p>
                  {/* <img  className="h-10 w-10"src={item.image} alt="" /> */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          {/* Total Bill */}
          <div className="border-t mt-4 pt-4">
            <p className="text-lg font-bold">Total: ${totalBill.toFixed(2)}</p>
          </div>
        </div>
      )}

      {/* Render Category Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6 pt-10  ">
        {menu_list.map((item, index) => (
          <button
            key={index}
            onClick={() => setCategory(item.menu_name)} // Update category on click
            className="text-white px-4 py-4 rounded mt-2 hover:bg-black "
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="w-[80px] h-[80px] object-cover mb-2"
            />
            <p className="text-black text-sm">{item.menu_name}</p>
          </button>
        ))}
      </div>

      {/* Render Food Items based on selected category */}
      <h2 className="text-2xl font-semibold mt-6 pt-10">
        <strong className="text-6xl">Food</strong> Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-6">
        {filteredFood.map((item) => (
          <div key={item._id} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-xl font-bold mt-2">${item.price}</p>
              <p className="text-xl font-bold mt-2">{item.rating}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  -
                </button>
                <span>
                  {cart.find((cartItem) => cartItem._id === item._id)?.quantity || 0}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-4 py-2 rounded text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
