import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import Job from "../../components/Job/Job";

const Home = () => {
  const {user}= useState(AuthContext)
  const [jobs, setJobs]= useState([])
  useEffect(()=>{
    const getJob=async()=>{
      const {data}= await axios.get('http://localhost:9000/jobs')
      setJobs(data)
    }
    getJob();
    
  },[user])

  return (
    <div>
      <Banner></Banner>
      <div className="container px-6 py-10 mx-auto">
        <Tabs>
          <div className="flex justify-center items-end"><TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList></div>

          <TabPanel>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
              {
                jobs.filter(j=> j.category === 'Web Development').map(job => <Job key={job._id} job={job}></Job>)
              }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
              {
                jobs.filter(j=> j.category === 'Graphics Design').map(job => <Job key={job._id} job={job}></Job>)
              }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
              {
                jobs.filter(j=> j.category === 'Digital Marketing').map(job => <Job key={job._id} job={job}></Job>)
              }
             </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
