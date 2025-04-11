import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, photo, category, details } = coffee;

    console.log(coffee);

    return (
        <div className='m-20'>
            <Link to='/' className='text-4xl font-bold font-rancho hover:underline ml-32'>Back to Home</Link>
            <div className="w-4/5 mx-auto my-20 card card-side bg-ash-100 shadow-sm text-black justify-between">
                <figure>
                    <img src={photo} alt="coffee" />
                </figure>
                <div className='flex gap-4 justify-center items-center mr-5'>
                    <div className='text-xl'>
                        <h2 className="card-title"><span className='font-bold'>Name:</span>{name}</h2>
                        <p><span className='font-semibold'>Available Quantity: </span>{quantity}</p>
                        <p><span className='font-semibold'>Supplier: </span>{supplier}</p>
                        <p><span className='font-semibold'>Taste: </span>{taste}</p>
                        <p><span className='font-semibold'>Category: </span>{category}</p>
                        <p><span className='font-semibold'>Details: </span>{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;