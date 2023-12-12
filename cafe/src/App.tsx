import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./screen/home";
import NotFound from "./components/notfound";
import About from "./screen/about";
import Cafes from "./screen/cafes";
import Contact from "./screen/contact";
import Shop from "./screen/shop";

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
                path: "about",
                element: <About />,
            },
            {
                path: "cafes",
                element: <Cafes />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "shop",
                element: <Shop />,
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
