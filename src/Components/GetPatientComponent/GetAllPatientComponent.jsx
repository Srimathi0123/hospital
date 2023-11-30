import React, { useState, useEffect } from 'react'
import PatientComponent from './PatientComponent'
import './GetAllPatientComponent.css'
import axios from 'axios'


const GetAllPatientComponent = () => {

    const [Patients, setPatients] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3500/api/v1/hospital`)
            .then(response => setPatients(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='Patients'>
        {Patients.map((patient, index)=>(
            <PatientComponent patient={patient} key={index}/>
        ))}
    </div>
  )
}

export default GetAllPatientComponent