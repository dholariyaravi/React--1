import React from 'react'
import { Navigate } from 'react-router-dom'

const Authentication = ({children}) => {
const user= localStorage.getItem('user')
console.log(children)
if(user)return children
return <Navigate to="/login"/>
}

export default Authentication