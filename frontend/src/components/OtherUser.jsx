import React from 'react'

const OtherUser = () => {
  return (
    <div>
      <div className='flex gap-2 items-cente hover:bg-zinc-200 rounded p-2 cursor-pointer'>
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
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default OtherUser
