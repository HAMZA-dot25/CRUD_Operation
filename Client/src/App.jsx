import {BrowserRouter, Routes, Route}from 'react-router-dom'
import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
