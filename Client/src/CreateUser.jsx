// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[age, setAge] = useState();
    const navigate = useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result =>{

          console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
      <div className='d-flex vh-100 bg-black justify-content-center align-item-center'>
        <div className="w-50 bg-white rounded p-3 m-5">
            <form action="" onSubmit={Submit} >
                <h2>Add Users</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className="form-control" 
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className="form-control"
                    onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className="form-control" 
                    onChange={(e)=> setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success '>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateUser
