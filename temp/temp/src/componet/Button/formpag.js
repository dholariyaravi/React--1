import {useState} from 'react'
import "./Formpag.css"
import React from 'react';


const Formpag = () => {

  const [userRegistration, setUserRegistration] = useState ({
    Username: "",Password:"",phoneNo:""

  });

  const [records, setRecords] = useState([]);

  const input =(e) => {
    const name = e.target.name;
    const value = e.target.value;
    console. log(name,value);

    setUserRegistration({...userRegistration, [name]:value})
  } 
    // =================================

   const handleSubmit = (e)=>{
     e.preventDefault();

     const newRecord = {... userRegistration ,id:new Date().getTime().toString() }
     console.log(records);
     setRecords([...records,newRecord]);
     console.log(records);

     setUserRegistration({Username:"", Password:"", phoneNo:""});

   }



  return (
     
    <div className="data11">
   <h2 className="header">Registration Form</h2>
   <from   onSubmit={handleSubmit}>
   
    <div>
      <label className='lab1' htmlFor='Username'>Username</label><br></br>
      <input className='lab2' type='text'
      value={userRegistration.Username}
      onChange={input}
      name='Username' id='Username'></input>
    </div>

    <div>
      <label className='lab1' htmlFor='phoneNo'>phoneNo</label><br></br>
      <input className='lab2' type='text'
      value={userRegistration.phoneNo}
      onChange={input}
      name='phoneNo' id='phoneNo'></input>
    </div>
    
    <div>
      <label className='lab1' htmlFor='Password'>Password</label> <br></br>
      <input className='lab2' type='text'
      value={userRegistration.Password}
      onChange={input}
      name='Password' id='Password'></input>
      
    </div>

  {/* ---------------------------------------------- */}
    <button type='submit' className='btnn'>submit </button>

   </from>

    <div>
      {
        records.map((curElem) =>{
        
          return (
              <div className='ravi1'>
                <p>Username:-{curElem.Username}</p>
                <p>Password:-{curElem.Password}</p>
                <p>phoneNo;-{curElem.phoneNo}</p>
             </div>
          )   
        })

      }
    </div>
 
    </div>
  )
}

export default Formpag ;