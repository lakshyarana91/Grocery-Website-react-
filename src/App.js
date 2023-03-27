import './style.css';
import { Nav } from './components/Nav'

import { Footer } from './components/Footer'
import { Products } from './components/Products';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Advantages } from './components/Advantages';

// Home Revolution Products Advantages Contact Us

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Products" element={<Products />} />
        <Route path="/Advantages" element={<Advantages />} />
        {/* <Route path="/Revolution" element={<Revolution />} /> */}
        <Route path="/Contact" element={<Signup />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
