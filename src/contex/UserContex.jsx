import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [displayname, setDisplayname] = useState("");

    return (
        <UserContext.Provider value={{ displayname, setDisplayname }}>
            {children}
        </UserContext.Provider>
    );
};

