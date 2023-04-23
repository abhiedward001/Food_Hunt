import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";


function App() {

  const [cartIsShown, setCartIshShown]=useState(false);
  const showCartHandler=()=>{
    setCartIshShown(true);
  }
  const hideCartHandler=()=>{
    setCartIshShown(false);
  }
  return (
    <CartProvider>
 {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
    <Header onShowCart={showCartHandler}></Header>
    <main>
    <Meals></Meals>
    </main>
    
    </CartProvider>
   
  );
}

export default App;
