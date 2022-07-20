import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const handleLogin=()=>{
        if(email==='karan@yopmail.com' && password==="123"){
            localStorage.setItem('user',true)
            navigate('/admin')
        }
        else{
            setError('Invalid credentials')
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <p>{error}</p>}
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login