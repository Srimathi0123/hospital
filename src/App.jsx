import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllPatientComponent from './Components/GetPatientComponent/GetAllPatientComponent'
import EditPatientComponent from './Components/EditPatientComponent/EditPatientComponent';
import DeletePatientComponent from './Components/DeletePatientComponent/DeletePatientComponent';
import AddNewPatientComponent from './Components/addNewPatientComponent/addNewPatientComponent';

function App () {
  return (
    <Router>
      <div className="container">
            <h1>Hospital App</h1>
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Patient</Link>
                <Link to="/admin/edit" >Edit Patient</Link>
                <Link to="/admin/delete" >Delete Patient</Link>
            </nav>
            <Routes>
              <Route exact path='/' element={<GetAllPatientComponent/>}></Route>
              <Route path='/admin/add' element={<AddNewPatientComponent/>}></Route>
              <Route path='/admin/edit' element={<EditPatientComponent/>}></Route>
              <Route path='/admin/delete' element={<DeletePatientComponent/>}></Route>
            </Routes>

              
      </div>
      

    </Router>
  );
}

export default App;