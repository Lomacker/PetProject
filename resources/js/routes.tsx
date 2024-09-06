import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home test1={'test11'} test2={12} />,
    },
    {
        path: '/users',
        element: <h1>Users</h1>
    },
]);

export default router;
