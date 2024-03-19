import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root";

export const router=createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
}])