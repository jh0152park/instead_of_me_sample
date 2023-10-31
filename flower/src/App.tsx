import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NotFound from "./components/notfound";
import Layout from "./components/layout";
import Home from "./screen/home";

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
