import React from 'react'
import { Link } from 'react-router-dom';

function Login(){
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const getItem =()=>{
    var user=JSON.parse(localStorage.getItem("user"));
    if(user.username==username&&user.password==password){
      alert("Welcome");
    }
    else{
      alert("Wrong Credential");
    }
  }
  
  return (
    
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <Link to={"/"}>
      <button onClick={()=>getItem()}>Log In</button>
      </Link>
    </div>
  )
}

export default Login