// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function User() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => {
      console.log(result.data)
      setUsers(result.data)
    })
    .catch(err => console.log(err))
  },[])

  const handleDelete=(id)=>{
    console.log(id)
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="d-flex vh-100 w-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <Link to="/create" className='btn btn-success'>Add +</Link>
        <div >
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user)=>{
                  // eslint-disable-next-line react/jsx-key
                  return (<tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className='btn btn-primary'>Update</Link>
                      {/* <Link to={`/delete/${user._id}`} className='btn btn-danger'>Delete</Link> */}
                      <button className="btn btn-danger" onClick={(e)=> handleDelete(user._id)} >Delete</button>
                    </td>
                  </tr>)
                })
              }
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default User