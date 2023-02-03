import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const PersonalData = () => {
  const { state } = useLocation();
  const { user, token } = useStateContext();
  const inputRef = useRef([]);
  const [userinfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')));

  let tname = 'f1';
  if(state) {
    tname = state.template;
  }  
  useEffect(() => {
    inputRef.current['fullname'].focus();
    fetchData(); 
  },[]);

  const inputValues = {
    user_id: userinfo.user_id,
    fullname: userinfo.user_name,
    phonenumber: userinfo.mobile_number,
    emailid: userinfo.email_id,
    profiletitle: userinfo.profile_tag_line,
    state:'',
    city:'',
    zipcode:'',
    profiledescription:'',
  }
  const [inputs, setInputs] = useState(inputValues);
  
  const fetchData = () => {  
    if (localStorage.getItem("personaldata") === null) {      
      axiosClient.get('/personaldata',{params:{user_id: inputs.user_id}}).then((res)=>{     
        setInputs({
          user_id:userinfo.user_id,
          fullname:(full_name in res.data)?res.data.full_name:userinfo.user_name,
          phonenumber:(phone_number in res.data)?res.data.phone_number:userinfo.mobile_number,
          emailid:(email_id in res.data)?res.data.email_id:userinfo.email_id,
          profiletitle:(profile_title in res.data)?res.data.profile_title:userinfo.profile_tag_line,
          state:res.data.state,
          city:res.data.city,
          zipcode:res.data.zipcode,
          profiledescription:res.data.profile_description,
        });
        const returnValues = {
          user_id:userinfo.user_id,
          fullname:(full_name in res.data)?res.data.full_name:userinfo.user_name,
          phonenumber:(phone_number in res.data)?res.data.phone_number:userinfo.mobile_number,
          emailid:(email_id in res.data)?res.data.email_id:userinfo.email_id,
          profiletitle:(profile_title in res.data)?res.data.profile_title:userinfo.profile_tag_line,
          state:res.data.state,
          city:res.data.city,
          zipcode:res.data.zipcode,
          profiledescription:res.data.profile_description,
        }
        localStorage.setItem('personaldata',JSON.stringify(returnValues));
      }).catch((error) => {
        if(error.response.status === 401){        
          navigate('/login');  
        }
      });
    } else {
      const sdata = localStorage.getItem('personaldata');
      const sessionUserData = JSON.parse(sdata);
      setInputs({
        user_id:userinfo.user_id,
        fullname:(fullname in sessionUserData)?sessionUserData.fullname:userinfo.user_name,
        phonenumber:(phonenumber in sessionUserData)?sessionUserData.phonenumber:userinfo.mobile_number,
        emailid:(emailid in sessionUserData)?sessionUserData.emailid:userinfo.email_id,
        profiletitle:(profiletitle in sessionUserData)?sessionUserData.profiletitle:userinfo.profile_tag_line,
        state:sessionUserData.state,
        city:sessionUserData.city,
        zipcode:sessionUserData.zipcode,
        profiledescription:sessionUserData.profiledescription,
      });
    } 
  }

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