import React from 'react'

const EmployeeData = () => {
    const emp = JSON.parse(localStorage.getItem("emp"));

  return (emp)?(
    <div>
      <h1>Employee Data</h1>
      <h2>Name: {emp.empname}</h2>
      <h2>Id: {emp.empid}</h2>
      <h2>Email: {emp.empemail}</h2>        
    </div>
  ):(
      <div>
          <h1>Employee Data</h1>
          <h2>No Employee Added</h2>
      </div>
  )
}

export default EmployeeData

