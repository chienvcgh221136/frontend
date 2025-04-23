import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context to share state and functions across the app
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate(); // React Router navigation function
    const [iphones, setIphones] = useState([]); // Store list of iPhones
    const [isIphone, setIsIphone] = useState(true); // Boolean flag for conditionally rendering or filtering

    // Function to fetch all iPhones from backend API
    const fetchIphones = async () => {
        try {
            const response = await fetch('http://localhost:3000/iphone'); // Replace with your actual endpoint
            const data = await response.json(); // Parse the JSON response
            setIphones(data); // Update state with fetched iPhones
        } catch (error) {
            console.error('Error fetching iPhones:', error); // Log errors if fetch fails
        }
    };

    // Fetch iPhones when the component mounts
    useEffect(() => {
        fetchIphones();
    }, []);

    // Value passed to context consumers
    const value = { iphones, navigate, isIphone, setIsIphone };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
