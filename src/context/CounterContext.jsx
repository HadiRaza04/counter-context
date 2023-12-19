import { createContext, useState } from "react";

export const ConterContext = createContext(null);

export const ContextProvider = (props) => {
    const [count, setCount] = useState(7);
    return(
        <ConterContext.Provider value={{count, setCount}}>
            {props.children}
        </ConterContext.Provider>
    )
}