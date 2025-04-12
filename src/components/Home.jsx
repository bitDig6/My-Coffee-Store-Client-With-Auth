import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffeeCollection = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeCollection);

    return (
        <div className='home-bg min-h-dvh'>
            <div className='m-20'>
                {/* a banner has to be here too */}
                <h1 className='my-20 text-6xl text-center text-purple-500 font-rancho'>Hot and Cold Coffee: {coffeeCollection.length}</h1>

                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;