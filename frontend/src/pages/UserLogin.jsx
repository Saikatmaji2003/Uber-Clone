import React, { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const {user,setUser} = useContext(userDataContext);
  const navigate = useNavigate();

  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
   const userData={
      email: email,
      password: password
    };

    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);

    if(response.status===201){
      // console.log(response.data);
      const user=response.data.user;
      const token=response.data.token;
      setUser(user);
      localStorage.setItem('token',token);
      navigate('/home');
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlJpZGVTd2lmdDwvdGV4dD48L3N2Zz4=" alt="RideSwift" className='w-45 mb-5' />
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
          <p className='text-center'> New here?
            <Link to='/signup' className='text-blue-600'> Create a new account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/captain-login' 
          className='bg-[#10b461] text-white flex items-center justify-center font-semibold px-4 py-2 mb-7  rounded w-full text-lg'>
          Signin as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin