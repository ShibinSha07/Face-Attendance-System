import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sub, setSub] = useState('');
    const [session, setSession] = useState('');
    

    useEffect(() => {
        console.log("Email Updated: ", email);
        console.log("subject Updated: ", sub);
        console.log("session Updated: ", session);
    }, [email,sub, session]);


    return (
        <AppContext.Provider value={{ setEmail, username, setUsername, password, setPassword, sub, setSub, session, setSession }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
