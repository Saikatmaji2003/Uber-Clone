import React, { useContext, useEffect, useState } from 'react';
import { captainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CaptainProtectedWrapper = ({ children }) => {
    const { captain, setCaptain } = useContext(captainDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                setIsLoading(false);
            }

        }).catch((error) => {
            console.error(error);
            navigate('/captain-login');
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

export default CaptainProtectedWrapper
