import React from 'react'
import { Link } from 'react-router-dom';

const Create = () => {
    const [empname,setEmpname] = React.useState("");
    const [empemail,setEmpemail] = React.useState("");
    const [empid,setEmpid] = React.useState("");
    const setEmp =()=>{
        var emp = {
            empname,
            empid,
            empemail
        }
        localStorage.setItem("emp",JSON.stringify(emp));
    }

  return (
    <div>
      <label htmlFor="">Employee Name: </label>
      <br />
      <input type="text" value={empname} onChange={(e)=>setEmpname(e.target.value)} />
      <br />
      <label htmlFor="">Employee id: </label>
      <br />
      <input type="text" value={empid} onChange={(e)=>setEmpid(e.target.value)}/>
      <br />
      <label htmlFor="">Employee email: </label>
      <br />
      <input type="text" value={empemail} onChange={(e)=>setEmpemail(e.target.value)}/>
      <br />
      <Link to={"/empdata"}>
      <button onClick={()=>setEmp()}>ADD</button>
      </Link>
    </div>
  )
}

export default Create
