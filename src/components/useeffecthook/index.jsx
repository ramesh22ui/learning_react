import React from 'react'
{/**

--useEffect hook let us perform side effect in functional 
   component
--Side effects are fetching data, working with the DOM
--useEffect accepts a callback function(called the effect function),which by default
run every time the component re-renders.
-- useEffect let us conditionally perform effects with the dependencies array.
--The dependencies array is the second argument passed to useEffect.
-- if any one of the values in the array changes, the effect function runs again
--if no values are included in the dependencies array, useEffect will only run on component mount.
--useEffect lets us unsubscribe from listeners that we might have created by returning a function at the end.
--We want to unsubscribe from certain events, such as an event listener, because when the 
  component unmounts (i.e. the user goes to a different page), React may attempt to update state that no longer exists,
  causing an error.
  
--Fetch Data from an API
useEffect is the hook to use when you want to make an HTTP request (namely, a GET request when the component mounts).

Note that handling promises with the more concise async/await syntax requires creating a separate function.

This is because the effect callback function cannot be async.
*/}
const UseEffectHook = () => {
  return (
    <div>UseEffectHook</div>
  )
}

export default UseEffectHook