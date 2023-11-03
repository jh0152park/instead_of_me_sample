import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./components/home/home";
import Consulting from "./components/consulting/consulting";
import People from "./components/people/people";

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
                path: "people",
                element: <People />,
            },
            {
                path: "consulting",
                element: <Consulting />,
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

// 홈
// 더낸 세금
// 상담 신청하기
