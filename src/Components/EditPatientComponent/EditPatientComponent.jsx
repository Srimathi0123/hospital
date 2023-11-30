import React, { useState } from 'react';
import './EditPatientComponent.css';

import axios from 'axios';

const EditPatientComponent = () => {
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
    const PhoneNumberValidator = () => {
      if(PatientInfo.PatientPhoneNumber.length === 10)
      {
        axios
          .post('http://localhost:3500/api/v1/hospital/validate', {PatientPhoneNumber: PatientInfo.PatientPhoneNumber})
          .then((response) => {
            setPatientInfo({
              PatientName: response.data.PatientName,
              PatientBloodGroup: response.data.PatientBloodGroup,
              PatientGender: response.data.PatientGender,
              PatientPhoneNumber: response.data.PatientPhoneNumber
            })
          })
          .catch((error) => {
            if(error.response)
            {
              alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
            }
          })
      }
    };


    const formSubmitHandler=(event)=>{
        event.preventDefault();

        axios
      .patch('http://localhost:3500/api/v1/hospital',PatientInfo)
      .then((response) =>
      {
        if(response.data.acknowledged === true)
        alert(`${PatientInfo.PatientName} is updated successfully`);
        window.location.href = '/';
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
    <h2>updating Patient</h2>

    <div className='form-group'>
      <label>Phone</label>
      <input
        type='text'
        pattern="[0-9]{10}"
        placeholder='Enter a patient id'
        value={PatientPhoneNumber}
        onChange={PatientPhoneNumberHandler}
        required
      />
    </div>
      <div>
        <button onClick={PhoneNumberValidator}>Check</button>
      </div>

      <div className='form-group'>
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the Patient Name'
          value={PatientName}
          onChange={PatientNameHandler}
          required
        />
      </div>
      <div className="form-group">
        <label>Blood Group</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Blood Group"
          value={PatientBloodGroup}
          onChange={PatientBloodGroupHandler}
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
        <button type='submit'>Update</button>
      </div>
    </form>
  );
};
export default EditPatientComponent;

