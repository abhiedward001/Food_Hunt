// import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals";
// import Cart from "./components/Cart/Cart";
// import { useState } from "react";
// import CartProvider from "./Store/CartProvider";
import Home from "./components/LandingPage/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import reactDOM from "react-dom/client";


function App() {

  // const [cartIsShown, setCartIshShown]=useState(false);
  // const showCartHandler=()=>{
  //   setCartIshShown(true);
  // }
  // const hideCartHandler=()=>{
  //   setCartIshShown(false);
  // }
  return (
//     <CartProvider>
//  {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
//     <Header onShowCart={showCartHandler}></Header>
//     <main>
//     <Meals></Meals>
//     </main>
    
//     </CartProvider>

   <Home></Home>
  );
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  
])

// const root = reactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router}></RouterProvider>);


export default App;
