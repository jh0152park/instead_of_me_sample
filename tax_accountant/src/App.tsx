import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./components/home/home";
import Consulting from "./components/consulting/consulting";
import People from "./components/people/people";
import { useEffect } from "react";
import { DisplayResolution } from "./global/recoil";
import { useSetRecoilState } from "recoil";

const router = createBrowserRouter(
    [
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
                    path: "people",
                    element: <People />,
                },
                {
                    path: "consulting",
                    element: <Consulting />,
                },
            ],
        },
    ],
    { basename: "/Instead_of_me_tax-accountant" }
);

function App() {
    const setDisplayResolution = useSetRecoilState(DisplayResolution);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setDisplayResolution("mobile");
        } else {
            setDisplayResolution("web");
        }
    }, [setDisplayResolution]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
