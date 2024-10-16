import React, { useState } from 'react'
import Profile from './Profile';

const Signin = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState();
    const [displayname, setDisplayname] = useState("");

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
            <form  onSubmit={handleSubmit}>
                Name:<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                Number:<input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button type='submit'> Login </button>
                <h2>The name of the User is :{displayname ? (displayname) : "Enter the name"}</h2>

            </form>
            <Profile displayname={displayname}/>

        </>
    )
}

export default Signin;
