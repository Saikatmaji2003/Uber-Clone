import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [captainData, setCaptainData] = useState({});

  const { captain, setCaptain } = useContext(captainDataContext);
  const navigate = useNavigate();

  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if (response.status === 201) {
      const captain = response.data.captain;
      const token = response.data.token;
      setCaptain(captain);
      localStorage.setItem('token', token);
      navigate('/captain-home');
    }

    // Clear the input fields after submission
    setfirstName('');
    setlastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }
  return (
    <div className='px-5 py-5 flex h-screen flex-col justify-between'>
      <div>
        <img src="https://pngimg.com/d/uber_PNG24.png" alt="" className='w-20 mb-5' />
        <form action="" onSubmit={(e) => submitHandler(e)}>

          <h3 className='text-lg mb-2 w-full font-medium'>
            What's your name
          </h3>
          <div className='flex gap-4 mb-5'>
            <input type="text" required placeholder="enter first name"
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input type="text" required placeholder="enter last name"
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <h3 className='text-lg mb-2 font-medium'>
            What's your email
          </h3>
          <input type="email" required placeholder="demo@gmail.com"
            className='bg-[#eeeeee] px-4 py-2 mb-5 border border-gray-900 rounded w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className='text-lg mb-2 font-medium'>
            What's your password
          </h3>
          <input type="password" required placeholder="password"
            className='bg-[#eeeeee] px-4 py-2 mb-5 border border-gray-900 rounded w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className='text-lg mb-2 font-medium'>
            Vehicle Details
          </h3>
          <div className='flex gap-4 mb-5'>
            <input type="text" required placeholder="Vehicle Color"
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input type="text" required placeholder="Vehicle Plate Number"
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className='flex gap-4 mb-5'>
            <input type="number" required placeholder="Vehicle Capacity"
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              className='bg-[#eeeeee] w-1/2 px-4 py-2  border border-gray-900 rounded text-lg placeholder:text-base' value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <button
            className='bg-[#111] text-white font-semibold px-4 py-2 mb-2 rounded w-full text-lg'>
            Create captain acccount</button>
          <p className='text-center'> Already have a account?
            <Link to='/captain-login' className='text-blue-600'> Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup