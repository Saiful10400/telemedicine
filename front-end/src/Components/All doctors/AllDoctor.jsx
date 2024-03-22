import React, { useContext, useEffect, useState } from 'react';
import { axiosPublic } from './../../Custom hoocks/useAxiosPublic';
import { PiIdentificationBadge } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
const AllDoctor = () => {
    const[allDoctor,setAllDoctor]=useState([])
    useEffect(()=>{
        axiosPublic.get("/get-all-doctor")
        .then(res=>setAllDoctor(res.data))

    },[setAllDoctor])
    console.log(allDoctor)
    return (
        <div>



            <div className='grid grid-cols-4 gap-x-9'>
                {
                    allDoctor?.map((item,idx)=>{
                        return(
                            <div key={idx} className='bg-[#f3f3f8] rounded-xl'>

                                <div className='flex items-center'>
                                    <div className='w-[50%] flex justify-center items-center'>
                                        <img className='w-[150px] object-cover rounded-full h-[150px]' src={item?.profilePhoto} alt="" />
                                    </div>
                                    <div className='w-[50%]'>
                                        <h1 className='font-bold text-lg text text-gray-500'>{item?.title+" "+item?.firstName+" "+item?.lastName}</h1>
                                        <div>
                                            <div className='flex items-start gap-x-5'>
                                                <span className='bg-[#00ca99] text-white text-3xl rounded-full p-2'><FaUserDoctor /></span>
                                                <div>
                                                    <h1 className='text-xl font-bold'>Doctor type</h1>
                                                <h1>{item?.doctorType}</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-x-5'>
                                                <span className='bg-[#00ca99] text-white text-3xl rounded-full p-2'><PiIdentificationBadge /></span>
                                                <div>
                                                    <h1 className='text-xl font-bold'>Registration No</h1>
                                                <h1>{item?.regNo}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>




        </div>
    );
};

export default AllDoctor;