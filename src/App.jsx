import React from 'react';
import UserProvider  from "./contex/UserContex"
import Signin from './components/UserProfile/Signin';
import Profile from './components/UserProfile/Profile';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <UserProvider>
      <Signin />
      <Profile />
      <Counter />
    </UserProvider>
  );
}

export default App;
