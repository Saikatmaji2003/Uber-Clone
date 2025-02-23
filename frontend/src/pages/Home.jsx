import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1574853792871-8a8d2f4df893?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex justify-between flex-col pt-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16 ml-9'/>
        <div className='bg-white px-4 py-4 pb-7'>
          <h2 className='text-[30px] font-bold'> 
            Get Started with Uber
          </h2>
          <Link to='/login' className='flex items-center justify-center w-full text-white bg-black py-3 rounded-lg mt-5' >Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home