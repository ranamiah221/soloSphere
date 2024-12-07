import {  useEffect, useState } from "react";
import TableRow from "../../components/TableRow/TableRow";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";

const MyBids = () => {
  const axiosSecure = useAxiosSecure();
    const {user}=useAuth()
    // const [bids, setBids]=useState([]);

    const {data : bids=[], refetch} = useQuery({
      queryFn:()=> getData(),
      queryKey: ['bids', user?.email]
    })

    const {mutateAsync}= useMutation({
      mutationFn:async({id, status})=> {
        const {data}= await axiosSecure.patch(`/bid/${id}`,{status})
        return data;
      },
      onSuccess:()=>{
        toast.success('updated')
        refetch();
      }
    })

    const getData =async()=>{
      const {data} = await axiosSecure.get(`/my-bids/${user?.email}`)
      return data;
  }

  // handle status...
  const handleStatus=async(id, status)=>{
     await mutateAsync({id, status})
  }
    
    return (
        <div className='container px-4 mx-auto pt-8'>
            <div className='flex items-center gap-x-3 mb-5'>
          <h2 className='text-lg font-medium text-gray-800 '>My Bids</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            <span>0{bids.length}</span> Bid
          </span>
           </div>
           <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Title</span>
                        </div>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <span>Deadline</span>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        <button className='flex items-center gap-x-2'>
                          <span>Price</span>
                        </button>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        Category
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                      >
                        Status
                      </th>
  
                      <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                    {
                        bids.map(bid=><TableRow key={bid._id} bid={bid} handleStatus={handleStatus}></TableRow> )
                    }
                  </tbody>
                </table>
         
        </div>
        
  
    );
};

export default MyBids;