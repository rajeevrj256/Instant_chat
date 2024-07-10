import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
    const {selectedUser}=useSelector(store=>store.user);
    return (
        <div className='md:min-w-[550px] flex flex-col'>

            <div className='flex gap-2 items-cente bg-zinc-600 text-white px-4 py-2 mb-2'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={selectedUser?.profilePhoto} alt='userProfile' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between  gap-2 text-black '>
                        <p>{selectedUser?.fullName}</p>
                    </div>
                </div>

            </div>
            <Messages></Messages>
            <SendInput></SendInput>

        </div>
    )
}

export default MessageContainer
