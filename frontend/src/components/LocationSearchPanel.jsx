// import React from 'react'
// const LocationSearchPanel = ({ setPannelOpen, setVehiclepanelOpen }) => {

//   // sample location data
//   const locations = [
//     "24B near kapoor's cafe, Saikat coading school",
//     "24C near kapoor's cafe, Saikat coading school",
//     "24E near kapoor's cafe, Saikat coading school",
//     "24A near kapoor's cafe, Saikat coading school",
//     "24L near kapoor's cafe, Saikat coading school",
//   ];
//   return (
//     <div>
//       {/* this is just a sample data */}
//       {/* @@/frontend/src/pages/Home.jsx   @/frontend/src/components/LocationSearchPanel.jsx    update the code such that the user enter input in the destination and pickup fiels then use axios to fetch the suggestion from backend server and show them in location search panel and when user click on the suggestion then set the suggestiom in the pickup or destination field accordingly. */}

//       {
//         locations.map((location, idx) => {
//           return (
//             <div key={idx} onClick={() => {
//               setVehiclepanelOpen(true)
//               setPannelOpen(false)
//             }} className='flex justify-self-start items-center gap-4 my-2 active:border-gray-900 border-gray-100 border-2 p-2 rounded-xl'>
//               <h2 className='flex h-8 w-12 justify-center items-center rounded-full bg-[#eee]' ><i className="ri-map-pin-fill font-semibold"></i></h2>
//               <h4 className='font-medium'>{location}</h4>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default LocationSearchPanel


import React from 'react';

const LocationSearchPanel = ({
  setPannelOpen,
  setVehiclepanelOpen,
  suggestions,
  activeField,
  setPickup,
  setDestination,
}) => {

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion.description); // Update pickup field
    } else if (activeField === 'destination') {
      setDestination(suggestion.description); // Update destination field
    }
    // setVehiclepanelOpen(true); // Open the vehicle panel
    // setPannelOpen(false); // Close the location search panel
  };

  return (
    <div>
      {suggestions.map((suggestion, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(suggestion)}
          className='flex justify-self-start items-center gap-4 my-2 active:border-gray-900 border-gray-100 border-2 p-2 rounded-xl'
        >
          <h2 className='flex h-8 w-12 justify-center items-center rounded-full bg-[#eee]'>
            <i className='ri-map-pin-fill font-semibold'></i>
          </h2>
          <h4 className='font-medium'>{suggestion.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
