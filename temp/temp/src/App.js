import logo from './logo.svg';
import './App.css';
import "./App.css";
import Button from './componet/Button/Button';
import{useState}from 'react';
import {useEffect}from 'react';
import Profile from './componet/Button/Condisan'
import Formpag from './componet/Button/formpag';
import Hello from './componet/Navbar/Navbar';
import Home from './componet/Pages/Home/Home';
// hello
// hiiii


function App() {
  // let car = ["volvo" ,"creta" ,"audio"];
  let raj = [
    {"name":"ravi","lname":"dholariya","age":20,"weght":50,
    "name1":"rajan","lname1":"kathiriya","ag1e":20,"weght1":50,
     name2:"milan", lname2:"senjaliya",
       
  }];
  
  
const [data, setdata] = useState(0);
const add10=()=>{
      setdata (value +1)
}
  const[ value,setValue]=useState(0)
  const add=()=>{
    setValue (value+1)
  }
  const less=()=>{
    setValue (value-1)
  }
  
  const name=()=>{
    setValue (value+'rajan')
  }
  const namea=()=>{
    setValue (value+'ravi')
  }
  

 useEffect(()=>{
  console.log ("ravi dholariya")
 },{value}
  )
 useEffect(()=>{
  console.log ('react demo')
 },{value}) 
 

 useEffect(()=>{
  console.log ('ravi 111data')
 }, {value} )
 




 
  

  return (
    <div className="App">
     <Home/>

     {/* {car} hello my name is ravi dholariya   {car. map((item)=> <p>{item}</p>) } */}
  
     <Button  title={'click'} color={"second"}/>
     <Button title={"ravi"} color={'ravi'} />
     <Button title={"milan"} color={'ravi2'}/>
     <Button title={"rajan"} color= {"ravi3"}/> 
   
     {/* <Button title={"hello"}/> */}
 
     <Profile/>
 
     <div className='rr1'> 
  <h2>{raj.map ((item) => <p> my name is {item.name} {item.lname} age {item.age} </p>)} </h2>
  <h2>{raj.map ((item)=> <p>name is {item.name1} {item.lname1}</p>)}</h2>
  <h2>{raj.map ((item)=> <p>name {item.name2} {item.lname2}</p>)}</h2>
 
  </div> 

  {value}
   {/* <button>Add</button>  */}
  <button className='ravi5'  onClick={()=>add()}>Add</button> 
  <button  className='ravi5' onClick={()=>less()}>less</button> <br></br><hr></hr>
  {/* <button  className='ravi5' onClick={()=>name()}>click me</button> 
  <button  className='ravi5' onClick={()=>namea()}>click</button><br></br>  */}


  {/* ========================================================== */}

    <>
   
    <Formpag/>
    <Hello/>
    </>
    
  
   
    </div>  
  )
    
}












 
  

export default App;
