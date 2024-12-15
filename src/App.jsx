 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
// import Home from './pages/Home';
// import About from './pages/About';
import Header from './components/HEADER/Header';
import Homepage from './pages/home/homepage';
import Footer from './components/footer/Footer';
import ExploreMenu from './components/exploremenu/explore';
import FoodDisplay from './components/fooddisplay/food';

ExploreMenu

function App() {
  return (
    <Router>
      <Header />
    
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes> 
        <div>
        <ExploreMenu/>
        <FoodDisplay/>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
