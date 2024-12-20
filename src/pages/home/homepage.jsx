
import React, { useState, useEffect } from 'react';
import bgimg01 from '../../assets/bgimg03.jpeg';
import bgimg02 from '../../assets/img04.jpeg';
import bgimg03 from '../../assets/img05.jpeg';
import bgimg04 from '../../assets/img06.jpeg';

// import ExploreMenu from '../../components/exploremenu/explore';
// import FoodDisplay from '../../components/fooddisplay/food';

const Homepage = () => {

  const images = [bgimg01, bgimg02, bgimg03, bgimg04]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[1250px] h-[500px] md:h-[400px] sm:h-[300px] overflow-hidden mx-auto mt-8">
      {/* Slider Container */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          
        </div>
        
      ))}

{/* <ExploreMenu/>
<FoodDisplay/> */}
    </div>
  );
};

export default Homepage;
