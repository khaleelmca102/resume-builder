import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';
import PdfViewer from '../components/PdfViewer'

const Resume = (props) => {
    const navigate = useNavigate();
    const [resumeurl, setResumeUrl] = useState('');

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
        axiosClient.post('/resume')
            .then((res) => {
                setResumeUrl(res.data.pdfurl);
            }).catch((error) => {
                if(error.response.status === 401){        
                navigate('/login');  
                }
            });
    };

    return (   
        <div>
            <div className="container mt-4 mb-4">
                <h4>Personal Data</h4>
            </div>
            <div className='row'>
                <div className='col-mb'>
                    <div className=''>
                    {resumeurl.length > 0 &&
                    <PdfViewer document={resumeurl} />  
                    }  
                    </div>
                </div>
            </div>      
            <div className="clsDivButtons" >
                <button className="btn btn-success rounded" type="button" >Back </button>
                <button className="btn btn-success rounded" type="button" >Save & Download </button>
            </div>
    </div>
  )
}

export default Resume