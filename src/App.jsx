import React, { useState } from 'react'
import Signin from './components/Signin'
import Profile from './components/Profile'

const App = () => {
  const [displayname, setDisplayname] = useState("");

  return (
      
    <>
       <Signin setDisplayname={setDisplayname}/>
       <Profile displayname={displayname}/>
    </>
  )
}

export default App
