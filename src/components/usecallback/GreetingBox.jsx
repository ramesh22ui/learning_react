import React, { useEffect, useState } from 'react'

const GreetingBox = ({getGreeting}) => {
  const [greeting, setGreeting] =useState();
  useEffect(()=>{
    setGreeting(getGreeting());
    console.log("GreetingBox: useEffect");
  },[getGreeting])
  return (
    <div>
      <h3>{greeting}</h3>
    </div>
  )
}

export default GreetingBox