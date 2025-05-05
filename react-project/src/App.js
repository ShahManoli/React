import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Shop from './Shop';
import About from './About';
import Login from './Login';
import Register from './Register';
import ShopSingle from './ShopSingle';
import { useEffect, useState } from 'react';
import Cart from './Cart';

function App() {

  // Welcome message  
  const [uname, setUname] = useState(""); 
//

//add to cart

let cartvalue = JSON.parse(localStorage.getItem("product")) ?? [];

const [qty,setQty] = useState("")
const [cart, setCart] = useState(null);

useEffect(() => {
  if (cart) {
    let cartvalue = JSON.parse(localStorage.getItem("product")) ?? [];
    let cartitem = cartvalue.find((item) => item.id == cart.id);
    if (cartitem) {
      console.log("inside if");
      // cartitem.qty = Number(cartitem.qty) + 1; 
      // cartvalue.push({ qty : qty+1 }); 
      cartvalue = cartvalue.map((item) =>
        item.id === cart.id ? { ...item, qty: parseInt(item.qty) + qty } : item
      );
    } else {
      console.log("inside else");
      cartvalue.push({ ...cart, qty }); 
      localStorage.setItem("product", JSON.stringify(cartvalue));
    }

    localStorage.setItem("product", JSON.stringify(cartvalue));
  }
}, [cart, qty]);

const handleCart = (value) => {
  setCart(value);
};

const quantity = (value) => {
  setQty(value); 
};

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      <Header name={uname} />
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/shop/:id' element={<Shop/>}></Route> */}
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/shopsingle/:id' element={<ShopSingle handleCart={handleCart} handleQty={quantity}/>}></Route>

      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login setname={setUname} />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
