import React, { useContext, useEffect, useState } from 'react';
import { userDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const { setUser } = useContext(userDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return; // Prevent further execution
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.status === 200) {
                    setUser(response.data.user);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate, token]); // Dependencies

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
