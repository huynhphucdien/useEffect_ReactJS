import React from 'react'
import { useState } from 'react'
import Content from './content'
import CallAPI from './CallAPI'



 function Toggle() {
    const [show, setShow] = useState(false)
    return (
        <div style = {{ padding: 20}}>
           <button onClick = {() => setShow(!show)}>Toggle</button> 
           {show && <Content />}
           <CallAPI />
        </div>
    )
}
 
export default Toggle
