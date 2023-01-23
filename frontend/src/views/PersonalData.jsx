import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PersonalData = () => {
  const { state } = useLocation();
  const inputRef = useRef([]);

  let tname = 'f1';
  // if(state) {
  //   tname = state.template;
  // }

  const inputValues = {
    user_id:'',
    fullname:'',
    phonenumber:'',
    emailid:'',
    profiletitle:'',
    state:'',
    city:'',
    zipcode:'',
    profiledescription:'',
  }
  const [inputs, setInputs] = useState(inputValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const saveBasicInfo = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="container mt-4 mb-4">
        <h4>Personal Data</h4>
        <div className='row clsBasicInfo'>
          <div className='col-mb'>
            <section>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                      type="text" 
                      id="fullname" 
                      className='form-control'
                      ref={el => inputRef.current['fullname'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.fullname || ''}
                      required
                    />
                  </div>
                  <div className='col'>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input 
                      type="text" 
                      id="phonenumber" 
                      className='form-control'
                      ref={el => inputRef.current['phonenumber'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.phonenumber || ''}
                      required
                    />
                  </div>          
                </div>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor="profiletitle">Title</label>
                    <input 
                      type="text" 
                      id="profiletitle" 
                      className='form-control'
                      ref={el => inputRef.current['profiletitle'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.profiletitle || ''}
                      required
                    />
                  </div>
                  <div className='col'>
                    <label htmlFor="emailid">Email Id</label>
                    <input 
                      type="email" 
                      id="emailid" 
                      className='form-control'
                      ref={el => inputRef.current['emailid'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.emailid || ''}
                      required
                    />
                  </div>          
                </div>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor="state">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      className='form-control'
                      ref={el => inputRef.current['state'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.state || ''}
                      required
                    />
                  </div>
                  <div className='col'>
                    <label htmlFor="city">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      className='form-control'
                      ref={el => inputRef.current['city'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.city || ''}
                      required
                    />
                  </div>          
                  <div className='col'>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input 
                      type="text" 
                      id="zipcode" 
                      className='form-control'
                      ref={el => inputRef.current['zipcode'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      value = {inputs.zipcode || ''}
                      required
                    />
                  </div>          
                </div>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor='profiledescription'>About</label>
                    <textarea 
                      id="profiledescription"
                      className='form-control'
                      ref={el => inputRef.current['profiledescription'] = el}
                      autoComplete="off"
                      onChange={handleInputChange}
                      required
                      value={inputs.profiledescription || ''}
                    />
                  </div>
                </div>
                <br/>
                <div className='row'>
                  <div className='col'>                  
                    <div className="clsDivButtons" >
                      <button className="btn btn-success rounded" type="button"  onClick={() =>  {}}>Back </button>
                      <button className="btn btn-success rounded" type="button"  onClick={saveBasicInfo}>Save & Next </button>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalData