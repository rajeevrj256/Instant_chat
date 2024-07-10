import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx';
import { useSelector } from 'react-redux';
import store from '../redux/store.js';

const OtherUsers = () => {
  //my custome hook

  useGetOtherUsers();
  const {OtherUsers}=useSelector(store=>store.user);
  if(!OtherUsers)return;//early return in react
  return (
    <div className='overflow-auto flex-1'>
      {
        OtherUsers?.map((user)=>{
          return (
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
      

    </div>
  )
}

export default OtherUsers
