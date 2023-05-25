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
        loader : ({params}) => fetch (`http://localhost:3000/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
