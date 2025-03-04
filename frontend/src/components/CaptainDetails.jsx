import React from 'react'

const CaptainDetails = () => {
    return (
        <>
            <div className='flex items-center justify-between '>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-xc8pg40i5dqb1.png?width=640&crop=smart&auto=webp&s=4029ddd24fbe7e577359e7e6d1f0c49bec2b4856" alt="" />
                    <h4 className='text-lg font-medium'>John Doe</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>&#8377; 295.20</h4>
                    <p className='text-sm text-gray-600'>earned</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 bg-gray-100 rounded-xl p-3 mt-8'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </>
    )
}

export default CaptainDetails