import React, { createContext, useContext,  useEffect,useState } from 'react';
import axios from 'axios';
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
      // console.log(userData)
      const [data, setData] = useState(null);
      const fetchData = async () => {
        // Make your API call here
        const response = await axios.get(`https://geth-ofyh.onrender.com/userinfo/${userData.username}`);
        setData(response.data);
      };
      useEffect(() => {

         if (userData.username) {
          fetchData();
         }
      }, []);
      console.log(data)
  return (
    <DataContext.Provider value={{ userData, setUserData,deleteUserData, data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);