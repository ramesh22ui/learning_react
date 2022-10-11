import React, { useState } from 'react';
import {Stack,Box} from '@mui/material'
{/**

--useState Hook: useState hook allows to create state variable in a React
  function component.
-- state allow us to access and update certain values in our components over time
-- When we create a state variable, we must provide it a default value
   (which can be any data type)
-- We get that state variable as the first value in an ray, which we can destructure and declare with "const"
-- useSate also gives us a setter functions to update the state after it is created
-- To update our state variable, we pass the setter function the new value we want our state to be. 
-- useState can be used once or multiple times a single component.
--Manage State with an Object
--you can use an object with useState , which allow you to manage individual values as key-value pairs.

*/}
const UseStateHook = () => {
    const [name, setName] = useState('Ramesh');
    const [number,setNumber] = useState(0);
    const [flag, setFlag] = useState(false);
    const [data,setData] = useState([1,2,3,4,5]);
    const [user, setUser] = useState({
        name:'',
        age:0
    })
    const handleFlag = ()=>{
        setFlag(prev=>!prev)
    }
    const handleData =()=>{
        setData([6,7,8,9,10])
    }
    const handleUser =(e)=>{
        const {name, value} = e.target;
        setUser(prev =>{
            return {
                ...prev, [name]:value
            }
        })
    }
  return (
   <>
    <Stack>UseStateHook</Stack>
    <Stack direction='row' spacing={2}>
        <Box>Name:{name}</Box>
        <Box>Number: {number}</Box>
        <Box> {flag && 'True'}</Box>
    </Stack>
    
    <Stack direction='row' spacing={2} >
        {data && data.map((item,idx)=><Box key={idx}>{item}</Box>)}
    </Stack>
    <Stack direction='row' spacing={2}>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={handleFlag}>Change Flag</button>
        <button onClick={handleData}>Change Data</button>
        <button onClick={handleUser}>Update User</button>
    </Stack>
   </>
  )
}

export default UseStateHook