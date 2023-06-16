import React from 'react';
import { deleteShoppingCart } from '../../../utilis/fakeDb';
import CartItem from '../../shared/CartItem';
import Swal from 'sweetalert2';

const CarttTable = ({ cart, handleQuantityChange, refetch }) => {






    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to clear your cart collection!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {

                deleteShoppingCart()
                refetch()


              Swal.fire(
                'Deleted!',
                'Your Cart has been deleted.',
                'success'
              )
            }
          })


        
    }
    return (
        <div>

            <div>




                <div className="overflow-x-auto w-full">
                    <table className="lg:table table-compact w-full">
                        {/* head */}
                        <thead>
                            <tr >

                                <th className='text-primary text-lg'>Products</th>
                                <th className='text-primary text-lg'>Price</th>
                                <th className='text-primary text-lg'>Quantity</th>
                                <th className='text-primary text-lg'>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                cart && cart.map(data => <CartItem key={data._id} data={data} handleQuantityChange={handleQuantityChange}></CartItem>)
                            }

                        </tbody>
                        {/* foot */}




                    </table>

                    <button onClick={handleDelete} className='button-primary '>Clear Cart</button>

                </div>



            </div>

        </div>
    );
};

export default CarttTable;