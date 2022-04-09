import React from 'react'
import { Link } from 'react-router-dom';
function Signup() {
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [number, setNumber] = React.useState("");
    const register =()=>{
        var reg = {
            username, 
            password,
            number
        }
        localStorage.setItem("user",JSON.stringify(reg));
    }


  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} />
      <br />
      <label htmlFor="username">Number: </label>
      <input type="number"value={number} onChange={(e)=>setNumber(e.target.value)} />
      <br />
      <label htmlFor="username">Passowrd: </label>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <Link to="/">
      <button onClick={()=>register()}>Sign Up</button>
      </Link>
    </div>
  )
}
export default Signup
