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
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>,
            },
            {
                path: '/viewCoffee/:id',
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
                loader: () => fetch('http://localhost:5000/users')
            }
        ]
    }
]);

export default router;