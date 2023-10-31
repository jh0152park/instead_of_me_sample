import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import Our from "./screen/our";

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
                path: "our",
                element: <Our />,
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
