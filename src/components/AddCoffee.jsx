import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo =  form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // sending data to server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added Coffee',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })

    }

    return (
        <div className='w-5/6 mx-auto my-20 p-10 bg-ash-100 rounded-xl'>
            <h2 className='font-rancho text-4xl text-black font-bold text-center'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee} className="fieldset md:space-y-5">
                {/* form name and quantity row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Coffee Name</legend>
                        <input type="text" name='name' className="input md:min-w-sm bg-white text-black" placeholder="Coffee Name" />
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Available Quantity</legend>
                        <input type="text" name='quantity' className="input md:min-w-sm bg-white  text-black" placeholder="Available Quantity" />
                    </div>
                </div>

                {/* form supplier row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Supplier</legend>
                        <input type="text" name='supplier' className="input md:min-w-sm bg-white text-black" placeholder="Supplier Name" />
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Taste</legend>
                        <input type="text" name='taste' className="input md:min-w-sm bg-white  text-black" placeholder="Coffee Taste" />
                    </div>
                </div>

                {/* category and details row */}
                <div className='flex gap-10 justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Category</legend>
                        <div className="join">
                            <input type="text" name='category' className="input md:min-w-sm bg-white text-black" placeholder="Coffee Category" />
                        </div>
                    </div>

                    <div>
                        <legend className="fieldset-legend text-black">Category Details</legend>
                        <div>
                            <input type="text" name='details' className="input md:min-w-sm bg-white text-black" placeholder="Details" />
                        </div>
                    </div>
                </div>

                {/* photo URL row */}
                <div className='flex justify-center items-center'>
                    <div>
                        <legend className="fieldset-legend text-black">Photo URL</legend>
                        <div>
                            <input type="text" name='photo' className="input min-w-3xl bg-white text-black" placeholder="Photo URL" />
                        </div>
                    </div>
                </div>

                <input type="submit" className='btn' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;



//https://i.ibb.co.com/TxzQCNC3/6.png