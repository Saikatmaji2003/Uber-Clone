import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { userDataContext } from '../context/UserContext';

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = useContext(userDataContext);
  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    if(response.status === 201){
      // console.log(response)
      const user=response.data.user;
      const token=response.data.token;
      setUser(user);
      localStorage.setItem('token',token);
      navigate('/home');
    }
    setfirstName('');
    setlastName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className='px-5 py-5 flex h-screen flex-col justify-between'>
      <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlJpZGVTd2lmdDwvdGV4dD48L3N2Zz4=" alt="RideSwift" className='w-45 mb-5' />
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
            Create account</button>
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