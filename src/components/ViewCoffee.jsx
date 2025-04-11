import React from 'react';
import { useLoaderData } from 'react-router';

const ViewCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);

    return (
        <div>
            <h1>View Coffee</h1>
        </div>
    );
};

export default ViewCoffee;