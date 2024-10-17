import React, { useContext } from 'react'
import { UserContext } from '../../contex/UserContex';
import Increment from './Increment';
import Decrement from './Decrement';
import Reset from './Reset';
const Counter = () => {
    const {count} = useContext(UserContext);
  return (
    <div>
       <h1>The Counter Value is:{count}</h1>
       <Increment />
       <Decrement />
       <Reset />
    </div>
  )
}

export default Counter
