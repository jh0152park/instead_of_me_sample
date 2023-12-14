import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./screen/home";
import { About } from "./components/category/about";
import { Premium } from "./components/category/premium";
import { Teeth } from "./components/category/teeth";
import { Community } from "./components/category/community";
import { Counsel } from "./components/category/counsel";

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
                path: "/about",
                element: <About />,
            },
            {
                path: "/premium",
                element: <Premium />,
            },
            {
                path: "/teeth",
                element: <Teeth />,
            },
            {
                path: "/community",
                element: <Community />,
            },
            {
                path: "/counsel",
                element: <Counsel />,
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
