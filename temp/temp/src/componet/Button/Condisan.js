import React, {useState } from "react";

function Condisan(){

    const [login, setlogin] = useState(false)
    
    return(
        <div>
            {login?<h1>form</h1>:<h1>welcome</h1>}
        </div>
    )
    
   
}

export default Condisan;