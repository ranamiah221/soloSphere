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
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import AllJobs from './../pages/AllJobs/AllJobs';
import PrivateRouter from "./PrivateRouter";
import BidRequests from "../pages/BidRequests/BidRequests";

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
                path:'/all-jobs',
                element:<PrivateRouter><AllJobs></AllJobs></PrivateRouter>
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
                element:<PrivateRouter><AddJobs></AddJobs></PrivateRouter>
            },
            {
                path:'/my-posted-job',
                element:<PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>
            },
            {
                path:'/my-bids',
                element:<PrivateRouter><MyBids></MyBids></PrivateRouter>
            },
            {
                path:'/bid-requests',
                element:<PrivateRouter><BidRequests></BidRequests></PrivateRouter>
            },
            {
                path:'/jobs/:id',
                element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader:({params})=>fetch(`https://solosphere-live-ranarasul21-gmailcom-ranas-projects-c2243bd3.vercel.app/jobs/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<PrivateRouter><UpdateJob></UpdateJob></PrivateRouter>,
                loader:({params})=>fetch(`https://solosphere-live-ranarasul21-gmailcom-ranas-projects-c2243bd3.vercel.app/jobs/${params.id}`)
                
            },

        ]
    }

])

export default router;