import "./Button.css"


function Button({title,color}) {
  console.log(color,title);
  return (
    <div>
  
   <button className={color}>{title}</button>
 
   
    </div>
  );
}
  


export default Button ;
