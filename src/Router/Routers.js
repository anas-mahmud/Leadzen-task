import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import UserDetails from "../components/UserDetails";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/userDetails/:id',
                element: <UserDetails></UserDetails>,
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            }
        ]
    }
])

export default router;