import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../../Card/Card'
import "./ListUsers.css"

const ListUsers = () => {
    const [users,setUsers]=useState([])
    const [error,setError]=useState()
    useEffect(()=>{
const result=axios.get('https://reqres.in/api/users?page=2').then((res)=>{
   console.log(res)
   setUsers(res.data.data)
}).catch(()=>{
    setError("No data found")
})
    },[])
    console.log(users,"User list")
  return (
    <div >
        <h1>List of Users</h1>
      <div className='users'>
            {users && users.length>0 && 
            users.map((item,key)=>(
                <Card image={item.avatar} fname={item.first_name}  lname={item.last_name} id={item.id} email={item.email} />
            ))
}
</div>
       
        {error&&error}
    </div>
  )
}

export default ListUsers