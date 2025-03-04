import React from 'react'

const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
    <h5 className='absolute text-center p-1 top-0 w-[93%]' onClick={() => {
        setWaitingForDriver(false)
    }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
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
    </div>

</div>
  )
}

export default WaitingForDriver