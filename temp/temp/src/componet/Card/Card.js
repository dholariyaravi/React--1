import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({image,email,fname,lname,id}) => {
  return (
    <div>
        <div><img src={image} /></div>
        <div>Name : {fname} {lname}</div>
        <div>Id: {id}</div>
        <div>Email:{email}</div>
        <Link to={`/user/${id}`}>View More</Link>
    </div>
  )
}