import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';
import GreetingBox from './GreetingBox';
//three cases to re-render component
//1. when state changes
//2. when props changes
//3. when parent component re-renders

const UseCallBack = () => {
    const [name,setName] = useState('');
    const [count,setCount] = useState(0);
    const getGreeting = useCallback(()=>{
        return `Hello ${name}`
    },[name])
    console.log("parent rerender");
  return (
    <div>
        <h1>UseCallBack</h1>
        <div>
        <input 
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /><br />
       <h3><GreetingBox getGreeting={getGreeting} /> </h3>
        </div>
        <div>
        <span>{count}</span><span>{' '}</span><button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <ChildComponent />
    </div>
  )
}

export default UseCallBack