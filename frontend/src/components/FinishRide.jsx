import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = ({ setFinishRidePanel }) => {
    return (
        <div >
            <h5 className='absolute text-center p-1 top-0 w-[93%]' onClick={() => {
                setFinishRidePanel(false)
            }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this ride</h3>
            <div className='flex items-center justify-between mt-3 p-4 border-2 border-yellow-300 rounded-lg' >
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h4 className='text-lg font-medium'>John Doeii</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-user-fill font-semibold"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A-CB</h3>
                            <p className='text-sm text-gray-700 -mt-1'>kankariya talab, Barasat</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-fill font-semibold"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A-CB</h3>
                            <p className='text-sm text-gray-700 -mt-1'>kankariya talab, Barasat</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-wallet-3-fill font-semibold"></i>
                        <div>
                            <h3 className='text-lg font-medium'>&#8377;194.35</h3>
                            <p className='text-sm text-gray-700 -mt-1'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-full'>
                    <Link to='/captain-home' className='w-full text-lg font-semibold flex items-center justify-center bg-green-600 p-3 text-white rounded-lg mt-5 '>Finish Ride</Link>
                </div>
            </div>
        </div>
    )
}

export default FinishRide