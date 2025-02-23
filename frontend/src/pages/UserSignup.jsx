import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [userData, setUserData] = useState({});

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });
    setfirstName('');
    setlastName('');
    setEmail('');
    setPassword('');
  }
  return (
      <div className='px-5 py-5 flex h-screen flex-col justify-between'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-20 mb-5' />
        <form action="" onSubmit={(e) => submitHandler(e)}>

          <h3 className='text-lg mb-2 font-medium'>
            What's your name
          </h3>
          <div className='flex gap-4 mb-6'>
            <input type="text" required placeholder="enter fiest name"
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
            className='bg-[#eeeeee] px-4 py-2 mb-6 border border-gray-900 rounded w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className='text-lg mb-2 font-medium'>
            What's your password
          </h3>
          <input type="password" required placeholder="password"
            className='bg-[#eeeeee] px-4 py-2 mb-6 border border-gray-900 rounded w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='bg-[#111] text-white font-semibold px-4 py-2 mb-3 rounded w-full text-lg'>
            Signup</button>
          <p className='text-center'> Already have a account?
            <Link to='/login' className='text-blue-600'> Login here</Link>
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

export default UserSignUp