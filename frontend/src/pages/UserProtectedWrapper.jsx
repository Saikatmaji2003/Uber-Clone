import React, { use, useContext, useEffect,useState } from 'react';
import { userDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const { user, setUser } = useContext(userDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                setIsLoading(false);
            }

        }).catch((error) => {
            console.error(error);
            navigate('/login');
            localStorage.removeItem('token');
        });


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper
