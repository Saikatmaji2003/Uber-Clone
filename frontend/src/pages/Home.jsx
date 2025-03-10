// import React, { useRef, useState } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import 'remixicon/fonts/remixicon.css'
// import LocationSearchPanel from '../components/LocationSearchPanel'
// import VehiclePanel from '../components/VehiclePanel'
// import ConfirmedRide from '../components/ConfirmedRide'
// import LookingForDriver from '../components/LookingForDriver'
// import WaitingForDriver from '../components/WaitingForDriver'
// import axios from 'axios'

// const Home = () => {

//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [pannelOpen, setPannelOpen] = useState(false);
//   const [vehiclepanelOpen, setVehiclepanelOpen] = useState(false);
//   const [confirmRidePanel, setconfirmRidePanel] = useState(false)
//   const [vehicleFound, setvehicleFound] = useState(false)
//   const [waitingForDriver, setWaitingForDriver] = useState(false)
//   const [pickupSuggestions, setPickupSuggestions] = useState([])
//   const [destinationSuggestions, setDestinationSuggestions] = useState([])
//   const [activeField, setActiveField] = useState(null)

//   const handlePickupChange = async (e) => {
//     setPickup(e.target.value)
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`,
//         {
//           params: { input: e.target.value },
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         })
//       setPickupSuggestions(response.data)
//     }
//     catch (error) {
//       console.error('Error fetching pickup suggestions:', error)
//     }
//   }

//   const handleDestinationChange = async (e) => {
//     setDestination(e.target.value)
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`,
//         {
//           params: { input: e.target.value },
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         })
//       setDestinationSuggestions(response.data)
//     }
//     catch (error) {
//       console.error('Error fetching destination suggestions:', error)
//     }
//   }

//   const pannelRef = useRef(null)
//   const pannelCloseRef = useRef(null)
//   const vehiclepanelRef = useRef(null)
//   const confirmRidePanelRef = useRef(null);
//   const vehicleFoundRef = useRef(null);
//   const waitingForDriverRef = useRef(null);

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('submitted')
//   }

//   //panel
//   useGSAP(() => {

//     if (pannelOpen) {
//       gsap.to(pannelRef.current, {
//         height: '70%',
//         padding: 24,
//         opacity: 1
//       })
//       gsap.to(pannelCloseRef.current, {
//         opacity: 1
//       })
//     }
//     else {
//       gsap.to(pannelRef.current, {
//         height: '0%',
//         padding: 0,
//         opacity: 0
//       })
//       gsap.to(pannelCloseRef.current, {
//         opacity: 0
//       })
//     }
//   }, [pannelOpen])

//   //Vehicle panel
//   useGSAP(() => {
//     if (vehiclepanelOpen) {
//       gsap.to(vehiclepanelRef.current, {
//         transform: 'translateY(0)'
//       })
//     } else {
//       gsap.to(vehiclepanelRef.current, {
//         transform: 'translateY(100%)'
//       })
//     }
//   }, [vehiclepanelOpen])

//   //Confirmed panel
//   useGSAP(() => {
//     if (confirmRidePanel) {
//       gsap.to(confirmRidePanelRef.current, {
//         transform: 'translateY(0)'
//       })
//     } else {
//       gsap.to(confirmRidePanelRef.current, {
//         transform: 'translateY(100%)'
//       })
//     }
//   }, [confirmRidePanel])

//   //Vehicle Found
//   useGSAP(() => {
//     if (vehicleFound) {
//       gsap.to(vehicleFoundRef.current, {
//         transform: 'translateY(0)'
//       })
//     } else {
//       gsap.to(vehicleFoundRef.current, {
//         transform: 'translateY(100%)'
//       })
//     }
//   }, [vehicleFound])

//   //watingFor driver panel
//   useGSAP(() => {
//     if (waitingForDriver) {
//       gsap.to(waitingForDriverRef.current, {
//         transform: 'translateY(0)'
//       })
//     } else {
//       gsap.to(waitingForDriverRef.current, {
//         transform: 'translateY(100%)'
//       })
//     }
//   }, [waitingForDriver])

//   return (
//     <div className='relative h-screen overflow-hidden'>
//       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlJpZGVTd2lmdDwvdGV4dD48L3N2Zz4=" alt="RideSwift" className='w-45 absolute left-5 top-5' />
//       <div className='h-screen w-screen'>
//         {/* image for temporary use */}
//         <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
//       </div>
//       <div className='absolute h-screen flex flex-col justify-end top-0 w-full'>
//         <div className='h-[35%] p-6 bg-white relative'>
//           <h5 className='absolute top-6 right-6 text-2xl opacity-0'
//             onClick={() => setPannelOpen(!pannelOpen)}
//             ref={pannelCloseRef}
//           >
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>
//           <h4 className='text-2xl font-semibold'>
//             Find a trip
//           </h4>
//           <form onSubmit={(e) => { submitHandler(e) }} >
//             <div className='line absolute h-16 left-10  w-1 bg-gray-900 rounded-full top-[45%]'></div>
//             <input type="text" placeholder='Add a pick-up location'

//               className='bg-[#eee] px-12 py-3 text-lg rounded-lg mt-5 w-full'
//               value={pickup}
//               onClick={() => {
//                 setPannelOpen(true)
//                 setActiveField('pickup')
//               }}
//               onChange={handlePickupChange}
//             />

//             <input type="text" placeholder='Enter your destination'
//               className='bg-[#eee] px-12 py-3 text-lg rounded-lg mt-5  w-full'
//               value={destination}
//               onClick={() => {
//                 setPannelOpen(true)
//                 setActiveField('destination')
//               }}
//               onChange={(e) => {
//                 setDestination(e.target.value)
//                 handleDestinationChange(e)
//               }}
//             />
//           </form>
//         </div>
//         <div ref={pannelRef} className='h-0 bg-white opacity-0'>
//           <LocationSearchPanel setVehiclepanelOpen={setVehiclepanelOpen} setPannelOpen={setPannelOpen} />
//         </div>
//       </div>

//       <div ref={vehiclepanelRef} className='fixed z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white w-full'>
//         <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setVehiclepanelOpen={setVehiclepanelOpen} />
//       </div>
//       <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-12'>
//         <ConfirmedRide setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound} />
//       </div>
//       <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-12'>
//         <LookingForDriver setvehicleFound={setvehicleFound} />
//       </div>
//       <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-12'>
//         <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
//       </div>
//     </div>
//   )
// }

// export default Home


import React, { useRef, useState, useContext, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext';
import { userDataContext } from '../context/UserContext';
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclepanelOpen, setVehiclepanelOpen] = useState(false);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({})
  const [vehicleType, setVehicleType] = useState(null)

  const { sendMessage, receiveMessage } = useContext(SocketContext);
  const { user } = useContext(userDataContext);

  useEffect(() => {
    // console.log(user);
    sendMessage("join", { userType: "user", userId: user._id })
  },[user])

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPickupSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching pickup suggestions:', error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching destination suggestions:', error);
    }
  };

  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);
  const vehiclepanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  // GSAP animations (unchanged)
  //panel
  useGSAP(() => {
    if (pannelOpen) {
      gsap.to(pannelRef.current, {
        height: '70%',
        padding: 24,
        opacity: 1,
      });
      gsap.to(pannelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(pannelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0,
      });
      gsap.to(pannelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [pannelOpen]);

  //Vehicle panel
  useGSAP(() => {
    if (vehiclepanelOpen) {
      gsap.to(vehiclepanelRef.current, {
        transform: 'translateY(0)',
        opacity: 1,
      })
    } else {
      gsap.to(vehiclepanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclepanelOpen])

  //Confirmed panel
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
        opacity: 1
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel])

  // //Vehicle Found
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        opacity: 1, // Make the panel visible
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehicleFound]);




  //watingFor driver panel
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        opacity: 1
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver])

  //Find trip
  async function findTrip() {
    setVehiclepanelOpen(true); // Open the vehicle panel
    setPannelOpen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(response.data)
    // console.log(response.data)
  }

  //Create ride
  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)

  }

  return (
    <div className='relative h-screen overflow-hidden'>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlJpZGVTd2lmdDwvdGV4dD48L3N2Zz4="
        alt="RideSwift"
        className='w-45 absolute left-5 top-5'
      />
      <div className='h-screen w-screen'>
        <img
          className='h-full w-full object-cover'
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className='absolute h-screen flex flex-col justify-end top-0 w-full'>
        <div className='h-[35%] p-6 bg-white relative'>
          <h5
            className='absolute top-6 right-6 text-2xl opacity-0'
            onClick={() => setPannelOpen(!pannelOpen)}
            ref={pannelCloseRef}
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className='line absolute h-16 left-10 w-1 bg-gray-900 rounded-full top-[45%]'></div>
            <input
              type='text'
              placeholder='Add a pick-up location'
              className='bg-[#eee] px-12 py-3 text-lg rounded-lg mt-5 w-full'
              value={pickup}
              onClick={() => {
                setPannelOpen(true);
                setActiveField('pickup');
              }}
              onChange={handlePickupChange}
            />
            <input
              type='text'
              placeholder='Enter your destination'
              className='bg-[#eee] px-12 py-3 text-lg rounded-lg mt-5 w-full'
              value={destination}
              onClick={() => {
                setPannelOpen(true);
                setActiveField('destination');
              }}
              onChange={handleDestinationChange}
            />
          </form>
          <button onClick={findTrip} className='bg-green-600 text-white px-4 py-2 rounded-lg mt-3 w-full text-lg font-semibold'>
            Find Trip
          </button>
        </div>
        <div ref={pannelRef} className='h-0 bg-white opacity-0'>
          <LocationSearchPanel
            setPannelOpen={setPannelOpen}
            setVehiclepanelOpen={setVehiclepanelOpen}
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            activeField={activeField}
            setPickup={setPickup}
            setDestination={setDestination}
          />
        </div>
      </div>

      <div ref={vehiclepanelRef} className='fixed scale-z-100 bottom-0  translate-y-full px-3 py-10 pt-12 bg-white w-full'>
        <VehiclePanel selectVehicle={setVehicleType} fare={fare} setconfirmRidePanel={setconfirmRidePanel} setVehiclepanelOpen={setVehiclepanelOpen} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed z-50 bottom-0  translate-y-full px-3 py-6 bg-white w-full pt-12'>
        <ConfirmedRide setVehiclepanelOpen={setVehiclepanelOpen} createRide={createRide} pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed scale-z-100 bottom-0  translate-y-full px-3 py-6 bg-white w-full pt-12'>
        <LookingForDriver createRide={createRide} pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} setvehicleFound={setvehicleFound} />
      </div>


      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0  translate-y-full px-3 py-6 bg-white w-full pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
