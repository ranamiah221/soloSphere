import Tr from "../../components/Tr/Tr"
import { toast } from 'react-hot-toast';
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyPostedJobs = () => {
  const axiosSecure= useAxiosSecure();
    const {user}=useAuth();
    const {data: myPostedJob=[], refetch}=useQuery({
       queryFn: ()=>getData(),
       queryKey: ['myPostedJob']
    })
   
    const getData =async()=>{
      const {data}=await axiosSecure(`/job/${user?.email}`)
          return data
      }

    const handleDelete = id =>{
      axiosSecure.delete(`/jobs/${id}`)
      .then(res=>{
        if(res.data.deletedCount > 0){
          toast.success('Deleted Job Successfully')
          getData();
        }
      })
      
    }

    return (

      
      <section className='container px-4 mx-auto pt-12'>
        
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            <span>0{myPostedJob.length}</span> Jobs
          </span>
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
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
                          <span>Price Range</span>
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
                        Description
                      </th>
  
                      <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                   {
                    myPostedJob.map(job=> <Tr key={job._id} job={job}
                      handleDelete={handleDelete}
                    ></Tr>)
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default MyPostedJobs