import React from 'react'
import { IoIosSearch } from "react-icons/io";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate=useNavigate();
    const logoutHandle=async()=>{
        try {
            const res=await axios.get(`http://localhost:8080/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form action="" className='flex items-center gap-2'>
                <input className='input input-bordered rounded-md'
                    type='text'
                    placeholder='Search..'
                />
                <button type='submit' className='btn  bg-slate-500'>
                    <IoIosSearch />
                </button>



            </form>
            <div className="divider px-3"></div>
            <OtherUsers/>

            <div className='mt-2'>
                <button onClick={logoutHandle} className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
