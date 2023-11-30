import React from 'react'
import './GetAllPatientComponent.css'

const PatientComponent = ({patient}) => {
return (
        <div className="card">
          <div className="text-container">
            <h3>{patient.PatientName}</h3>
            <p className="status">
              ({patient.PatientGender})
            </p>
            <p className="status">
             Patient ID: {patient.PatientPhoneNumber}
             </p>
            <p className="title">Blood Group </p>
            <p className='author'>{patient.PatientBloodGroup}</p>
            <p className="availability">{patient.availability}</p>
          </div>
        </div>
      );
}

export default PatientComponent