import React, { useState } from 'react'

import { createContext } from 'react'

export const CounterContext = createContext(null)

export const CounterProvider = (props) =>{

    const [count,setCount] = useState(null)
    return (
        <CounterContext.Provider value={{count,setCount,name:'Rohit'}} >
            {props.children}
        </CounterContext.Provider>
    )
}