import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>

            <Link to='/home' className='fixed h-10 w-10 flex items-center bg-white justify-center rounded-full right-2 top-2'>
            <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>

            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Saikat</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti suzuki alto</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between items-center'>
                    <div className='w-full mt-5'>
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
                </div>
                <button className='w-full bg-green-600 p-2 text-white rounded-lg mt-5'>Make a payment</button>
            </div>
        </div>
    )
}

export default Riding