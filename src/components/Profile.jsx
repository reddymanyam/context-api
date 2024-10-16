import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
    const { displayname } = useContext(UserContext); 

    return (
        <>
            <h3>Username is: {displayname ? displayname : "No username entered"}</h3>
        </>
    );
}

export default Profile;
