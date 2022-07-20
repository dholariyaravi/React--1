import React ,{ useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button'

 const Home = () => {
   
  return (
    <div> 
         {/* <Button title={"click me"} color={'second'} /> */}
         <nav class="navbar navbar-expand-lg navbar-info bg-black  navbar sticky-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span> 
  </button>
       
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="About">About</a>
      </li>
      <li class="nav-item dropdown">
        
      </li>
      <li class="nav-item">
        <a class="nav-link " href="page">page</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
      
    </form>
  </div>
</nav>

  <div>food websid</div>
    </div>
  )
}



export default Home;