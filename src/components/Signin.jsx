import React, { useState, useContext } from 'react';
import { UserContext } from "../contex/UserContex";

const Signin = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const { setDisplayname } = useContext(UserContext); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== "") {
            setDisplayname(name); 
        } else {
            setDisplayname(""); 
        }
    }

    return (
        <>
            <h1>Sign In Form</h1>
            <form onSubmit={handleSubmit}>
                Name: 
                <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />
                Number: 
                <input 
                    type='number' 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)} 
                />
                <br />
                <button type='submit'>Login</button>
            </form>
        </>
    );
}

export default Signin;
