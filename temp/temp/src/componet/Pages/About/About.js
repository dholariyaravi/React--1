import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'

const About = () => {
    const location = useLocation()
    console.log(location.pathname)
    const navigate=useNavigate()
    useEffect(() => {
      setTimeout(()=>{
navigate('/')
      },5000)
    }, []);
  return (
    <div>About Page
        <Button title={"click me"} color={'second'} />
    </div>
  )
}

export default About