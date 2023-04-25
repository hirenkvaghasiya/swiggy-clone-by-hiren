import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from './src/components/Body';
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from './src/components/Error';
import Contact from "./src/components/Contact";
import RestaurantMenu from './src/components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            }, {
                path: '/about',
                element: <About />
            }, {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
