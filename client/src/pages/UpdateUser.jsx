// import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function UpdateUser() {

    const navigate = useNavigate()
    let [name,setName] = useState([])
    let [email,setEmail] = useState([])
    let [age,setAge] = useState([])

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
            console.log(result.data)
            console.log(email)
            console.log(age)
        })
        .catch(err => console.log(err))
    },[])


    const Submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/updateUser/"+id,{name,email,age})
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
            <h3 className="m-3">Update User</h3>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputAddress" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Age</label>
                    <input type="number" className="form-control" id="inputAddress2" value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
            
            
                <div className="col-12">
                    <button type="done" className="btn btn-success" onClick={Submit}>Done</button>
                </div>  
            </form>

        </div>
    </div>

  )
}

export default UpdateUser