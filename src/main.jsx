import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import ViewDetails from './components/pages/Details/ViewDetails.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import LogIn from './components/pages/LogIn/LogIn.jsx';
import Register from './components/pages/register/Register.jsx';
import CheckOut from './components/pages/checkOut/CheckOut.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import OrderDetails from './components/pages/checkOut/OrderDetails.jsx';
import UserOrder from './components/pages/UserDetails/UserOrder.jsx';
import Dashboard from './components/pages/Dashboard/Dashboard.jsx';
import UserHome from './components/pages/Dashboard/UserHome.jsx';
import Collections from './components/pages/collections/Collections.jsx';
import AdminHome from './components/pages/Dashboard/Admin/AdminHome.jsx';
import AddItems from './components/pages/Dashboard/Admin/AddItems.jsx';
import ManageOrders from './components/pages/Dashboard/Admin/ManageOrders.jsx';
import AllUsers from './components/pages/Dashboard/Admin/AllUsers.jsx';

const queryClient = new QueryClient()



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

      },


      {

        path : "/orderDetails",
        element : <OrderDetails></OrderDetails>
      },


      {

        path : "/userOrder",
        element : <PrivateRoutes><UserOrder></UserOrder></PrivateRoutes>
      },

     
    ],

    
  },

  {
    path : "/dashboard",
    element : <Dashboard></Dashboard>,

    children  : [

      {
        path : "myOrder",
        element : <UserOrder></UserOrder>
      },


      {

        path : "userHome",
        element  : <UserHome></UserHome>
      },

      {

        path : "myCart",
        element : <Cart></Cart>
      },
      
      {

        path : "AdminHome",
        element : <AdminHome></AdminHome>


      },

      {
        path : "addItems",
        element : <AddItems></AddItems>
      },
      {

        path : "manageOrders",
        element : <ManageOrders></ManageOrders>
      },

      {
        path : "allUsers",
        element : <AllUsers></AllUsers>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>   

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />

    </QueryClientProvider>
      
      
</AuthProvider>
  </React.StrictMode>,
)
