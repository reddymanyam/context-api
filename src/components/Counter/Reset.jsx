import React, { useContext } from 'react'
import { UserContext } from '../../contex/UserContex'
const Reset = () => {
    const{setCount} = useContext(UserContext);

    const Reset = () =>{
        setCount(0)
    }
  return (
    <div>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Reset
