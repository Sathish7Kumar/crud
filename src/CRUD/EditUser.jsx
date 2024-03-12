import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const {id} = useParams()
    const x = useNavigate()

    const [userDetails, setuserDetails] = useState({
        name : "",
        email_id : "",
        mobile_number : ""
    })

    const {name,email_id,mobile_number} = userDetails

    useEffect(()=>{
        fetch(`https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/${id}`)
        .then((res)=>res.json())
        .then((x)=>setuserDetails(x))
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put("https://65e975efc9bf92ae3d39369a.mockapi.io/api/v1/users/"+id,userDetails)
        alert("userUpdated")
        x('/user')
    }
    
  return (
    <>
      <h1>Update User</h1>
      <div>
        <form onSubmit={handleUpdate}>
          <label>Name : </label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={(e) => setuserDetails({...userDetails,name:e.target.value})}
            type="text"
            required
          />

          <br />
          <br />
          <label>Email : </label>
          <input
            name="email"
            id="email"
            required
            value={email_id}
            onChange={(e) => setuserDetails({...userDetails,email_id:e.target.value})}
            type="email"
          />
          <br />
          <br />
          <label>Mobile : </label>
          <input
            name="mobile_number"
            id="mobile_number"
            required
            value={mobile_number}
            onChange={(e) => setuserDetails({...userDetails,mobile_number:e.target.value})}
            type="tel"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    </>
  )
}

export default EditUser