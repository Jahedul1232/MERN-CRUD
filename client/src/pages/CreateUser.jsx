// import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useState } from "react"

function CreateUser() {
    const [name,setName] = useState([])
    const [email,setEmail] = useState([])
    const [age,setAge] = useState([])
    const navigate = useNavigate()

const Submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result=> 
        {
            console.log(result)
            alert('Your data is stored')
            navigate('/')
        })
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex vh-100 w-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <h3 className="m-3">Create User</h3>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Johnson Charles" 
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputAddress" placeholder="***@gmail.com" 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Age</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="20" 
                    onChange={(e)=> setAge(e.target.value)}/>
                </div>
            
            
                <div className="col-12">
                    <button type="done" className="btn btn-success" onClick={Submit}>Done</button>
                </div>
            </form>

        </div>
    </div>

  )
}

export default CreateUser