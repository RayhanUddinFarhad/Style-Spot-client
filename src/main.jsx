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
      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
