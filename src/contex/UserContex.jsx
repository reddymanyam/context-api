import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [displayname, setDisplayname] = useState("");
    const [count, setCount] = useState(0);

    return (
        <UserContext.Provider value={{ displayname, setDisplayname, count, setCount }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

 