import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserOrder from '../UserDetails/UserOrder';
import { FaAddressCard, FaCartPlus, FaFileContract, FaHome, FaMoneyBillAlt, FaShoppingBasket, FaUserAltSlash, FaUserEdit } from 'react-icons/fa';

const Dashboard = () => {




  const isAdmin = true
    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}


            



      {


isAdmin  ? 
       <>
       
       
       <li><Link to = "/dashboard/adminHome"> <FaHome></FaHome> Admin Home</Link></li>
        <li><Link to = "/dashboard/addItems"> <FaMoneyBillAlt></FaMoneyBillAlt> Add Items</Link></li>
        <li><Link to = "/dashboard/manageOrders"> <FaCartPlus></FaCartPlus> Manage  Orders</Link></li>
      <li><Link to = "/dashboard/allUsers"> <FaUserEdit></FaUserEdit> All Users</Link></li></> :

      <>
      
      <li><Link to = "/dashboard/userHome"> <FaHome></FaHome> User Home</Link></li>
        <li><Link> <FaMoneyBillAlt></FaMoneyBillAlt> Payment History</Link></li>
        <li><Link to = "/dashboard/myCart"> <FaCartPlus></FaCartPlus> My Cart</Link></li>
      <li><Link> <FaUserEdit></FaUserEdit> Add Review</Link></li></>

       
      } 
            


            <div className='divider'></div>

            <li><Link to = "/"> <FaHome></FaHome> Home</Link></li>
            <li><Link to = "/collections"> <FaShoppingBasket></FaShoppingBasket> Shop</Link></li>
            <li><Link> <FaFileContract></FaFileContract> Contract</Link></li>

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;