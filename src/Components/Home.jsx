import React from 'react'

const Home = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  return (user)?(
    <div>
      <h2>User: {user.username}</h2>
      <h2>Phone no.: {user.number}</h2>
    </div>
  ):(<div>
      <h1>Home</h1>
      <h2>No one Logged in Now</h2>
  </div>)
}

export default Home
