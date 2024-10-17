import React, { useContext } from 'react'
import { UserContext } from '../../contex/UserContex'

const Decrement = () => {
    const{count,setCount} = useContext(UserContext);
    const Dec = () =>{
         setCount(count - 1);
    }
  return (
    <div>
      <button onClick={Dec}>Decrement</button>
    </div>
  )
}

export default Decrement
