import React, { createContext, useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_BASE_URL}`, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    setSocket(newSocket);

    newSocket.on('connect', () => console.log('Connected to the server'));
    newSocket.on('disconnect', () => console.log('Disconnected from the server'));
    newSocket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    return () => {
      newSocket.disconnect();
      newSocket.off('connect');
      newSocket.off('disconnect');
      newSocket.off('connect_error');
    };
  }, [import.meta.env.VITE_BASE_URL]);

  const sendMessage = useCallback((eventName, message) => {
    if (!socket) {
      console.error('Socket is not initialized');
      return;
    }
    socket.emit(eventName, message);
  }, [socket]);

  const receiveMessage = useCallback((eventName, callback) => {
    if (!socket) {
      console.error('Socket is not initialized');
      return;
    }
    socket.on(eventName, callback);
  }, [socket]);

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage,socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;