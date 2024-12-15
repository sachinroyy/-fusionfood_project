
// import React, { useState } from "react";
// import { menu_list, food_list } from "../../assets/assets"; // Import your menu and food data

// const ExploreMenu = () => {
//   const [category, setCategory] = useState("All"); // Default category is 'All'

//   // Filter food items based on the selected category
//   const filteredFood = food_list.filter(
//     (food) => category === "All" || food.category === category
//   );

//   return (
//     <div className="container mx-auto p-6">
//        <h1 className="text-4xl font-bold flex justify-center hover:underline"><strong className="text-6xl">Explore</strong> Our Menu</h1>
//       <p className="explore-menu-text font-thin text-2xl pt-10">
//         Choose from a diverse menu featuring a delectable array of dishes. Our
//         mission is to satisfy your cravings and elevate your dining experience,
//         one delicious meal at a time.
//       </p>

//       {/* Render Category Buttons */}
//       <div className="flex space-x-4 mb-6 pt-10">
//         {menu_list.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setCategory(item.menu_name)} // Update category on click
//             className=" text-white px-4 py-2 rounded"
//           >
           
//             <img src={item.menu_image} />
//             <p className="text-black"> {item.menu_name}</p>
//           </button>
//         ))}
//       </div>

//       {/* Render Food Items based on selected category */}
//       <h2 className="text-2xl font-semibold mt-6 pt-10"><strong className="text-6xl">Food</strong> Items</h2>
//       <div className="grid grid-cols-3 gap-8 mt-6">
//         {filteredFood.map((item) => (
//           <div key={item._id} className="card bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg ">{item.name}</h3>
//               <p className="text-gray-600">{item.description}</p>
//               <p className="text-xl font-bold mt-2">${item.price}</p>
//               <p className="text-xl font-bold mt-2">{item.rating}</p>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;
import React, { useState } from "react";
import { menu_list, food_list } from "../../assets/assets"; // Import your menu and food data
import Globe from "../glove/Globe";

const ExploreMenu = () => {
  const [category, setCategory] = useState("All"); // Default category is 'All'

  // Filter food items based on the selected category
  const filteredFood = food_list.filter(
    (food) => category === "All" || food.category === category
  );

  return (
    <div className="container mx-auto p-6">
       <div className=""><Globe/></div>
      <h1 className="text-4xl font-bold flex justify-center hover:underline">
        <strong className="text-6xl">Explore</strong> Our Menu
      </h1>
      <p className="explore-menu-text font-thin text-2xl pt-10">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Render Category Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6 pt-10">
        {menu_list.map((item, index) => (
          <button
            key={index}
            onClick={() => setCategory(item.menu_name)} // Update category on click
            className="text-white px-4 py-4 rounded  mt-2"
          >
            <img src={item.menu_image} alt={item.menu_name} className="w-[80px] h-[80px] object-cover mb-2" />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
