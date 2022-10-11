import React from 'react'

const ChildComponent = () => {
    console.log("Child Rerendered")
  return (
    <div>ChildComponent</div>
  )
}

export default React.memo(ChildComponent)