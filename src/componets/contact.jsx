import React from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const backButton = ()=>{
    navigate (-1)
  };
  return (
    <div>
      <div>
        <button onClick={backButton}>back</button>
      </div>
      <br />
        <NavLink to="manager contact">manager contact</NavLink>
        <br />
        
        <br />
        <NavLink to= "owner contact"> owner contact</NavLink>
        <br/>
      
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolores atque iusto id, aut nam aspernatur quod</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, sapiente quia nostrum dignissimos recusandae, </p>
      <br />
      <div>
      <Outlet/>
        
      </div>
    </div>
  )
}

export default Contact
