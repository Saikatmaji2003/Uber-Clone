import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setcaptainData] = useState({})

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({
      email: email,
      password: password
    });
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img src="https://pngimg.com/d/uber_PNG24.png" alt="" className='w-20 mb-5' />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2 font-medium'>
            What's your email
          </h3>
          <input type="email" required placeholder="demo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] px-4 py-2 mb-7 border border-gray-900 rounded w-full text-lg placeholder:text-base'
          />
          <h3 className='text-lg mb-2 font-medium'>
            What's your password
          </h3>
          <input type="password" required placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] px-4 py-2 mb-7 border border-gray-900 rounded w-full text-lg placeholder:text-base'
          />
          <button
            className='bg-[#111] text-white font-semibold px-4 py-2 mb-3 rounded w-full text-lg'>
            Login</button>
          <p className='text-center'>join a fleet?
            <Link to='/captain-signup' className='text-blue-600'> Register as a Captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login'
          className='bg-[#d5622d] text-white flex items-center justify-center font-semibold px-4 py-2 mb-7  rounded w-full text-lg'>
          Signin as User
        </Link>
      </div>
    </div>)
}

export default CaptainLogin