import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    // category, details,
    console.log(coffee);

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure to delete this item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });

    }

    return (
        <div className="card card-side bg-ash-100 shadow-sm text-black justify-between">
            <figure>
                <img src={photo} alt="coffee" />
            </figure>
            <div className='flex gap-4 justify-center items-center mr-5'>
                <div className='text-xl'>
                    <h2 className="card-title"><span className='font-bold'>Name:</span>{name}</h2>
                    <p><span className='font-semibold'>Available Quantity: </span>{quantity}</p>
                    <p><span className='font-semibold'>Supplier: </span>{supplier}</p>
                    <p><span className='font-semibold'>Taste: </span>{taste}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <Link to={`/viewCoffee/${_id}`} className="btn bg-blue-600 join-item text-white">View</Link>
                        <Link className='btn' to={`/updateCoffee/${_id}`}>
                            Edit
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 join-item text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;