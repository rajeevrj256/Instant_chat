import React from 'react'
import SendInput from './SendInput'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[550px] flex flex-col'>

            <div className='flex gap-2 items-cente bg-zinc-600 text-white px-4 py-2 mb-2'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src='https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_640.jpg' alt='userProfile' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between  gap-2 text-black '>
                        <p>Rajeev</p>
                    </div>
                </div>

            </div>
            <SendInput></SendInput>

        </div>
    )
}

export default MessageContainer
