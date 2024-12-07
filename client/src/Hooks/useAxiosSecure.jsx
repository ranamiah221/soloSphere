import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://solosphere-live-ranarasul21-gmailcom-ranas-projects-c2243bd3.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {logOut}=useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.response.use(
        res=>{
            return res;
        },
        async error=>{
            if(error.response.status === 401 || error.response.status === 403){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error)
        }
        
    )
    return axiosSecure;
};

export default useAxiosSecure;