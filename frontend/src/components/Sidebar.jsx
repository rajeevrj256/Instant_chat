import React from 'react'
import { IoIosSearch } from "react-icons/io";
import OtherUsers from './OtherUsers';
const Sidebar = () => {
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
                <button className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
