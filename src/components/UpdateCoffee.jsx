import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, photo, category, details} = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const details = form.details.value;

        const newCoffee = {name, quantity, supplier, taste, photo, category, details};
        console.log(newCoffee);

        Swal.fire({
                    title: "Are you sure to update this item?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, update it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://my-coffee-store-server-gold.vercel.app/coffee/${_id}`, {
                            method: 'PUT',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(newCoffee)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.modifiedCount > 0) {
                                    Swal.fire({
                                        title: "Updated!",
                                        text: "Coffee has been Updated.",
                                        icon: "success"
                                    });
                                }
                            })
                    }
                });


    }

    return (
        <div className='m-20'>
            <h2 className='my-20 text-6xl text-center'>Update a Coffee</h2>
            <form onSubmit={handleUpdateCoffee} className="fieldset md:space-y-5">
                {/* form name and quantity row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Coffee Name</legend>
                        <input type="text" defaultValue={name} name='name' className="input md:min-w-sm bg-white text-black" placeholder="Coffee Name" />
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Available Quantity</legend>
                        <input type="text" defaultValue={quantity} name='quantity' className="input md:min-w-sm bg-white  text-black" placeholder="Available Quantity" />
                    </div>
                </div>

                {/* form supplier row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Supplier</legend>
                        <input type="text" defaultValue={supplier} name='supplier' className="input md:min-w-sm bg-white text-black" placeholder="Supplier Name" />
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Taste</legend>
                        <input type="text" defaultValue={taste} name='taste' className="input md:min-w-sm bg-white  text-black" placeholder="Coffee Taste" />
                    </div>
                </div>

                {/* category and details row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Category</legend>
                        <div className="join">
                            <input type="text" defaultValue={category} name='category' className="input md:min-w-sm bg-white text-black" placeholder="Coffee Category" />
                        </div>
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Category Details</legend>
                        <div>
                            <input type="text" defaultValue={details} name='details' className="input md:min-w-sm bg-white text-black" placeholder="Details" />
                        </div>
                    </div>
                </div>

                {/* photo URL row */}
                <div className='flex justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Photo URL</legend>
                        <div>
                            <input type="text" defaultValue={photo} name='photo' className="input min-w-3xl bg-white text-black" placeholder="Photo URL" />
                        </div>
                    </div>
                </div>

                <input type="submit" className='btn' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;