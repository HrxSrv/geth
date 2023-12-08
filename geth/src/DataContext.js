import React, { createContext, useContext,  useEffect,useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
      // Initialize from localStorage if it exists, or with default values
      const storedData = localStorage.getItem('userData');
      return storedData ? JSON.parse(storedData) : { email: '', password: '' ,username:''};
    });
    const deleteUserData = () => {
      // Delete userData and update localStorage
      localStorage.removeItem('userData');
      setUserData({ email: '', password: '' ,username:''});
    };
    useEffect(() => {
        // Update localStorage whenever userData changes
        localStorage.setItem('userData', JSON.stringify(userData));
      }, [userData]);
  return (
    <DataContext.Provider value={{ userData, setUserData,deleteUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);