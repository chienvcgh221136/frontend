import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [iphones, setIphones] = useState([]);
    const [isIphone, setIsIphone] = useState(true);

    // Fetch all iPhones from backend
    const fetchIphones = async () => {
        try {
            const response = await fetch('http://localhost:3000/iphone');
            const data = await response.json();
            setIphones(data);
        } catch (error) {
            console.error('Error fetching iPhones:', error);
        }
    };

    useEffect(() => {
        fetchIphones();
    }, []);

    const value = { iphones, navigate, isIphone, setIsIphone };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};