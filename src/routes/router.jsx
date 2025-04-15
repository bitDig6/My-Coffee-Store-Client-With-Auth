import { createBrowserRouter } from "react-router";
import App from "../App";
import AddCoffee from '../components/AddCoffee';
import ViewCoffee from "../components/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Users from "../components/Users";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://my-coffee-store-server-gold.vercel.app/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>,
            },
            {
                path: '/viewCoffee/:id',
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(`https://my-coffee-store-server-gold.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`https://my-coffee-store-server-gold.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },            
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://my-coffee-store-server-gold.vercel.app/users')
            }
        ]
    }
]);

export default router;