import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx';
import { useSelector } from 'react-redux';


const OtherUsers = () => {
  //my custome hook

  useGetOtherUsers();
  const {otherUsers}=useSelector(store=>store.user);
  if(!OtherUsers)return;//early return in react
  return (
    <div className='overflow-auto flex-1'>
      {
        otherUsers?.map((user)=>{
          return (
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
      

    </div>
  )
}

export default OtherUsers
