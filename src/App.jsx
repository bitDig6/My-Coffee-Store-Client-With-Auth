import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffeeCollection  = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeCollection);

  return (
    <div className='m-20'>
      <h1 className='my-20 text-6xl text-center text-purple-500 font-rancho'>Hot and Cold Coffee: {coffeeCollection.length}</h1>

      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map( coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div> 
    </div>
  )
}

export default App
