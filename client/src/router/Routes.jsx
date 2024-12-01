import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import AddJobs from "../pages/AddJobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/addJobs',
                element:<AddJobs></AddJobs>
            },
            {
                path:'/jobs/:id',
                element:<JobDetails></JobDetails>,
                loader:({params})=>fetch(`http://localhost:9000/jobs/${params.id}`)
            },

        ]
    }

])

export default router;