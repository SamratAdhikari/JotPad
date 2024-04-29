import React from 'react'
import {useNavigate } from 'react-router-dom'
import '../styles/Logout.css'





function Logout() {
  const navigate = useNavigate()

  const handleLogout = async (event) => {

    try{
      navigate('/logout')
    }
    catch(error){
        alert(error)
    }
    }

  return (
    <button className='logout-button' onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
