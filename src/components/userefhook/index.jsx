import React, { useEffect, useRef, useState } from 'react'
{/**
When to Use Refs
  --  Managing focus, text selection, or media playback. 
  --  Integrating with third-party DOM libraries. 
  --  Triggering imperative animations. 
*/}
const UseRefHook = () => {
    const [inputValue,setInputValue] = useState('r');
    const ref = useRef(null);
    const ref1 = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');
    };
    const handleChange = event => {
        console.log(event.target.value);
      };

    const element = ref.current;
    const element1 = ref1.current;

    element.addEventListener('click', handleClick);
    element1.addEventListener('keypress', handleChange);

    return () => {
      element.removeEventListener('click', handleClick);
      element1.removeEventListener('keypress', handleChange);
    };
  }, [inputValue]);

  return (
    <div>

      <button ref={ref}>Click</button>
      <input type='text' name='name' ref={ref1} />
    </div>
  );
};


export default UseRefHook