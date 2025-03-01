import React from 'react'

const LocationSearchPanel = ({ setPannelOpen, setVehiclepanelOpen }) => {

  // sample location data
  const locations = [
    "24B near kapoor's cafe, Saikat coading school",
    "24C near kapoor's cafe, Saikat coading school",
    "24E near kapoor's cafe, Saikat coading school",
    "24A near kapoor's cafe, Saikat coading school",
    "24L near kapoor's cafe, Saikat coading school",
  ];
  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map((location, idx) => {
          return (
            <div key={idx} onClick={() => {
              setVehiclepanelOpen(true)
              setPannelOpen(false)
            }} className='flex justify-self-start items-center gap-4 my-2 active:border-gray-900 border-gray-100 border-2 p-2 rounded-xl'>
              <h2 className='flex h-8 w-12 justify-center items-center rounded-full bg-[#eee]' ><i className="ri-map-pin-fill font-semibold"></i></h2>
              <h4 className='font-medium'>{location}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel