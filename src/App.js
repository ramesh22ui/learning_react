import logo from './logo.svg';
import './App.css';
import UseCallBack from './components/usecallback';
import UseStateHook from './components/usestate';
import UseRefHook from './components/userefhook';
import { createContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user,setUser] = useState("Ramesh")
  return (
    <UserContext.Provider value={user}>
 <div className="App">
      <UseStateHook />
      <UseRefHook />
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
