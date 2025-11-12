import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    path: '',
                    Component: Home,
                },
                {
                    path: '/category/:id',
                    Component: CategoryNews,
                },
            ]
        },
        {
            path: '/auth',
            element: <h2>Authentic layout</h2>
        },
        {
            path: '/news',
            element: <h2>News layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error 404</h2>
        },

    ]);

export default router;