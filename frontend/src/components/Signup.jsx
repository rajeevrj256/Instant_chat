import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [user,setUser]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmpassword:"",
    gender:"",
  });
  const handleCheckbox=(gender)=>{
    setUser({...user,gender})
  }
  const onSubmitHandler =(e)=>{
    e.preventDefault();
    console.log(user);
    setUser({
      fullname:"",
    username:"",
    password:"",
    confirmpassword:"",
    gender:"",
    })
    
  }

  return (
    <div className="min-w-96 mx-auto text-black">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100
'>
        <h1 className=' text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base '> Full Name</span>
            </label>
            <input
            value={user.fullname}
            onChange={(e)=>setUser({...user,fullname:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text" placeholder='Name' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base '>UserName</span>
            </label>
            <input
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text" placeholder='Username' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base '>Password</span>
            </label>
            <input
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text" placeholder='password' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base '>Confirm Password</span>
            </label>
            <input
            value={user.confirmpassword}
            onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text" placeholder='Confirm password' />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input type="checkbox" 
              checked={user.gender==="male"}
              onChange={()=>handleCheckbox("male")}
              defaultChecked 
              className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input 
              checked={user.gender==="female"}
              onChange={()=>handleCheckbox("female")}

              type="checkbox" 

              defaultChecked 
              className="checkbox mx-2" />
            </div>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login"> login </Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Singup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp
