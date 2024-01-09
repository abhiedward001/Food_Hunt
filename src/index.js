import reactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import App from './App';
import CardRestuarantShowcase from './components/CardRestuarantShowcase';

const router=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
    },
    
    {
        path:'/restuarant',
        element:<CardRestuarantShowcase/>
    }
    
  ]);

  const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
