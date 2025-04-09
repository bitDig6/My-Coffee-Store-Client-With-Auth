import React from 'react';

const AddCoffee = () => {
    return (
        <div className='w-5/6 mx-auto my-20 p-10 bg-ash-100 rounded-xl'>
            <h2 className='font-rancho text-4xl text-black font-bold text-center'>Add a Coffee</h2>
                <form className="w-1/3 mx-auto fieldset">
                    <legend className="fieldset-legend">Coffee Name</legend>
                    <div className="join">
                        <input type="text" className="input join-item bg-white" placeholder="Coffee Name" />
                        <button className="btn bg-peach-200 join-item border-none shadow-none">Save</button>
                    </div>

                    <legend className="fieldset-legend">Available Quantity</legend>
                    <div className="join">
                        <input type="text" className="input bg-white join-item" placeholder="Available Quantity" />
                        <button className="btn bg-peach-200 join-item border-none shadow-none">Save</button>
                    </div>
                </form>
            </div>
    );
};

export default AddCoffee;