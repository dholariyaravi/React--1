import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
    Link,Navigate 
  } from "react-router-dom";
import App from './App';
import About from './componet/Pages/About/About';
import Home from './componet/Pages/Home/Home';
import Admin from './componet/Pages/Admin/Admin';
import ListUsers from './componet/Pages/ListUsers/ListUsers';
import Login from './componet/Pages/Login/Login';
import UserId from './componet/Pages/Userid/Userid';
import Authentication from './modaules/Authenti/Authentication';

const Example = () => {
    const [buttonState,setButtonState]=useState()
    const [state,setState]=useState(true)
    useEffect(() => {
    if(buttonState==='1'){
        setState(true)
    }
    else if(buttonState==='2'){
        setState(false)
    }
    }, [buttonState]);

  return (
    <>
        {/* <button onClick={()=>setButtonState('1')}>Button 1</button>
        <button onClick={()=>setButtonState('2')}>Button 2</button>
       {state? <p>Button 1 content</p>:
        <p>Button 2 content</p>} */}
       {/* <ul>
       <li>
            <Link to='/Home'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/new'>new</Link>
            </li>
       </ul> */}
        <Routes>
<Route path='/' element={<App />} />
<Route path='/about' element={<About />} />
<Route path='/Home' element={<Home/>} />
<Route path='/user/:id' element={<UserId />} />
<Route path='/login' element={<Login />} />
<Route path='/users' element={<ListUsers />} />
<Route path='/admin' element={<Authentication><Admin /></Authentication>} />
<Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
  )
}

export default Example