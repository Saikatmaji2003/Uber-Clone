import React, { useRef, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmedRidePopUp from '../components/ConfirmedRidePopUp'
import { SocketContext } from '../context/SocketContext';
import { captainDataContext } from '../context/CaptainContext'
const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [ConfirmedRidePopUpPanel, setConfirmedRidePopUpPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null)
  const ConfirmedRidePopUpPanelRef = useRef(null)

  const { sendMessage, receiveMessage, socket } = useContext(SocketContext)
  const { captain } = useContext(captainDataContext)

  useEffect(() => {
    // console.log(user);
  }, [captain])

  useEffect(() => {
    sendMessage("join", { userType: "captain", userId: captain._id })

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          // console.log({
          //   location: {
          //     ltd: position.coords.latitude,
          //     lng: position.coords.longitude
          //   }
          // })
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()
    // return () => clearInterval(locationInterval)
  }, [])

  socket.on('new-ride', (data) => {
    console.log(data)
    // setRide(data)
    // setRidePopUpPanel(true)

})

  //Ride pop up panel
  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  // Conformed ride pop up Panel
  useGSAP(() => {
    if (ConfirmedRidePopUpPanel) {
      gsap.to(ConfirmedRidePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmedRidePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ConfirmedRidePopUpPanel])


  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex w-screen items-center justify-between'>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlJpZGVTd2lmdDwvdGV4dD48L3N2Zz4=" alt="RideSwift" className='w-45' />

        <Link to='/captain/logout' className=' h-10 w-10 flex items-center bg-white justify-center rounded-full '>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>

      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white w-full'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmedRidePopUpPanel={setConfirmedRidePopUpPanel} />
      </div>
      <div ref={ConfirmedRidePopUpPanelRef} className='fixed h-screen z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white w-full'>
        <ConfirmedRidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmedRidePopUpPanel={setConfirmedRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome