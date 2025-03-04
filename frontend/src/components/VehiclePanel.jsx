import React from 'react'

const VehiclePanel = ({ setconfirmRidePanel,setVehiclepanelOpen }) => {
    return (
        <div>
            <h5 className='absolute text-center p-1 top-0 w-[93%]' onClick={() => {
                setVehiclepanelOpen(false)
            }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-2'>Choose a vehicle</h3>

            <div onClick={()=>{
                setconfirmRidePanel(true)
            }} className='flex border-2 border-gray-200 active:border-gray-800  rounded-xl items-center justify-between w-full p-3 mb-2'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='text-base font-medium'>SwiftGo <span><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className='text-sm font-medium'>2 mins away</h5>
                    <p className='text-xs font-normal text-gray-900'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>&#8377;194.35</h2>
            </div>
            <div onClick={()=>{
                setconfirmRidePanel(true)
            }} className='flex border-2 border-gray-200 active:border-gray-800  rounded-xl items-center justify-between w-full p-3 mb-2'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='text-base font-medium'>SwiftMoto <span><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className='text-sm font-medium'>3 mins away</h5>
                    <p className='text-xs font-normal text-gray-900'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>&#8377;65.25</h2>
            </div>
            <div onClick={()=>{
                setconfirmRidePanel(true)
            }} className='flex border-2 border-gray-200 active:border-gray-800  rounded-xl items-center justify-between w-full p-3 mb-2'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='text-base font-medium'>SwiftAuto <span><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className='text-sm font-medium'>3 mins away</h5>
                    <p className='text-xs font-normal text-gray-900'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>&#8377;118.21</h2>
            </div>
        </div>
    )
}

export default VehiclePanel