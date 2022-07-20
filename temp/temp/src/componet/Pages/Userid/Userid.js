import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserId = () => {
    const {id}=useParams()
    const [user,setUser]=useState()
    useEffect(() => {
       axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
        setUser(res.data.data)
        console.log(res)
       })
    }, []);
  return (
    <div>UserId : {id}
    <div>
        <img src={user?.avatar}/>
        <p>{user?.first_name}</p>
    </div>
    </div>
  )
}

export default UserId