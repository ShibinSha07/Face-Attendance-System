import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sem, setSem] = useState('');
    const [session, setSession] = useState('');
    

    useEffect(() => {
        console.log("Email Updated: ", email);
        console.log("sem Updated: ", sem);
        console.log("session Updated: ", session);
    }, [email,sem, session]);


    return (
        <AppContext.Provider value={{ setEmail, username, setUsername, password, setPassword, sem, setSem, session, setSession }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
