import React, { useContext, useEffect, useState } from 'react';
import { captainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const { setCaptain } = useContext(captainDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        const fetchCaptainData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        fetchCaptainData();
    }, [token, navigate, setCaptain]); // Dependencies

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
