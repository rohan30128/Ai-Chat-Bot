import { useState } from "react";
import { Mycontext } from "./MyContext";

const MyProvider =({children})=>{
    const [question,setQusetion] = useState([]);
    return (
        <Mycontext.Provider value={{question,setQusetion}}>
            {children}
        </Mycontext.Provider>
    )
}

export default MyProvider;