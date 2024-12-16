import React, { useContext } from "react";

import { StoreContext } from "../contexts/usestorecontexts";
import FoodItem from '../../components/fooditeam/fooditeam';

const FoodDisplay = ({ category }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);
  
  const { food_list } = useContext(StoreContext);
  // console.log(food_list)        
  
  return (
    
    <div className="food-display " id="food-display ">
      
      <h2 className="font-semibold"></h2>
      <div className="  food-display-list ">
        {food_list.map((item, index) => {
          console.log(food_list) 
          if (category === "All" || category === item.category) {
            // console.log(item.name  )
             return (  
              <FoodItem
                key={index}
                id={item._id}
              
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
        
      </div>
    </div>
  );
};


export default FoodDisplay;
