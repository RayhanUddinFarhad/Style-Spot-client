import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import Collections from './components/pages/collections/collections.jsx';
import ViewDetails from './components/pages/Details/ViewDetails.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import LogIn from './components/pages/LogIn/LogIn.jsx';
import Register from './components/pages/register/Register.jsx';
import CheckOut from './components/pages/checkOut/CheckOut.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [


      {

        path : "/",
        element : <Home></Home>
      },

      {
        path : "/collections",
        element : <Collections></Collections>
      
      },


      {

        path : "/details/:id",
        element : <ViewDetails></ViewDetails>,
        loader : ({params}) => fetch (`https://dress-house-server.vercel.app/products/${params.id}`)
      }, 
      {

        path : "/cart",
        element : <Cart></Cart>,
        loader : () => fetch (`https://dress-house-server.vercel.app/products`)
      },

      {

        path : "logIn",
        element : <LogIn></LogIn>
      },

      {
        path : "register",
        element : <Register></Register>
      },

      {

        path : "/checkOut",
        element : <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader : () => fetch (`https://dress-house-server.vercel.app/products`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>    <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
