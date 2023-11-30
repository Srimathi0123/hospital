import React, { useState } from 'react';
import axios from 'axios';
import './addNewPatientComponent.css'

const AddNewPatientComponent = () => {
    const [PatientInfo, setPatientInfo]=useState({
        PatientName:'',
        PatientBloodGroup:'',
        PatientPhoneNumber:'',
        PatientGender:''        
    });
    
    const PatientNameHandler = (event)=>{
        setPatientInfo({
            ...PatientInfo,
            PatientName:event.target.value,
        });
    };

    const PatientBloodGroupHandler=(event)=>{
        setPatientInfo({
            ...PatientInfo,
            PatientBloodGroup:event.target.value,
        });

    };
    const PatientPhoneNumberHandler=(event)=>{
        setPatientInfo({
            ...PatientInfo,
            PatientPhoneNumber:event.target.value,
        });
    };

    const PatientGenderHandler=(event)=>{
        setPatientInfo({
            ...PatientInfo,
            PatientGender:event.target.value,
        });
    };

    const formSubmitHandler=(event)=>{
        event.preventDefault();

      axios

        .post(`http://localhost:3500/api/v1/hospital/`, PatientInfo)
        .then((response) => {
          console.log(response)
          alert(`${response.data.PatientName} is added successfully.`)
          window.location.href='/'
        })
        .catch((error) => {
          if(error.response)
          {
            alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
          }
        })
      };


    const {PatientName,PatientBloodGroup, PatientPhoneNumber,
    PatientGender}=PatientInfo;



  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
    <h2>Adding a new Patient</h2>

    <div className='form-group'>
      <label>Patient Name</label>
      <input
        type='text'
        placeholder='Enter the patient name'
        value={PatientName}
        onChange={PatientNameHandler}
        required
      />
    </div>
    <div className='form-group'>
        <label>Patient Blood group</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the blood group'
          value={PatientBloodGroup}
          onChange={PatientBloodGroupHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient ID</label>
        <input
          type='text'
          pattern='[0-9]{10}'
          placeholder='Enter the Patient ID'
          value={PatientPhoneNumber}
          onChange={PatientPhoneNumberHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Gender</label>
        <select
          value={PatientGender}
          onChange={PatientGenderHandler}
          required
        >
          <option value="">Select a gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          
        </select>
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};
export default AddNewPatientComponent;

