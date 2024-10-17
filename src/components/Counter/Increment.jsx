import React, { useContext } from 'react'
import { UserContext } from '../../contex/UserContex';

const Increment = () => {
    const{count,setCount} = useContext(UserContext);
    
    const Inc = () =>{
        setCount(count+1);
    }

  return (
    <div>
       <button onClick={Inc}>Increment</button>
    </div>
  )
}

export default Increment
