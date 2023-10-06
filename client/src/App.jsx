// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './pages/User'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <dev>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/update/:id' element={<UpdateUser/>}/>

        </Routes>
      </BrowserRouter>
    </dev>
  )
}

export default App
