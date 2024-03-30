// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{

        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))

    },[])


        const handleDelete=(id)=>{
            axios.delete('http://localhost:3001/deleteUser/'+id)
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
    
        }
    

  return (
    <div>
        <div className='d-flex bg-black justify-content-center align-item-center'>
            <div className="w-100 bg-white rounded p-3 m-5 ">
            <Link to='/create' className='btn btn-success '>Add +</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                // eslint-disable-next-line react/jsx-key
                                return <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>
                                                <Link to={`/update/${user._id}`} className='btn btn-success w-25 '>Edit</Link>
                                                <button className='btn btn-danger m-4 w-25 ' 
                                                onClick={() => handleDelete(user._id)}>Delete</button>
                                            </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
        </div>
    </div>
  )
}

export default Users
