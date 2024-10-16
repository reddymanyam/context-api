import React from 'react';
import { UserProvider } from './components/UserContext';
import Signin from './components/Signin';
import Profile from './components/Profile';

const App = () => {
  return (
    <UserProvider>
      <Signin />
      <Profile />
    </UserProvider>
  );
}

export default App;
