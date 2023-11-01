import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NotFound from "./components/notfound";
import Layout from "./components/layout";
import Home from "./screen/home";
import Shop from "./screen/shop";
import Order from "./screen/order";
import Class from "./screen/class";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "order",
                element: <Order />,
            },
            {
                path: "class",
                element: <Class />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
