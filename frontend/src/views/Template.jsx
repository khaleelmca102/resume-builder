import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Template = () => {  
  const [templateName, setTemplateName] = useState('f1');
  const navigate = useNavigate();

  const templateImgs = [
      {
        'id':'f1',
        'url':'Fresher1-1634027291.png'
      },
      {
        'id':'e1',
        'url':'Experienced1-1634036987.png'
      }
  ]

  const saveTemplate = () => {
    navigate('/personaldata', {state: {'template':templateName}});
  }

  return (
    <div>
      <div className="container mt-4 mb-4">
        <h4>All Templates</h4>
        <p>Choose a resume layout that you like, you can customize it later on.</p>
        <div className='row'>          
          {templateImgs.map((timg) => (
            <div className='col-mb clsTemplateImg' key={timg.id}>
              <button 
                onClick={() => {setTemplateName(timg.id)}}
              >
                  <img 
                    id={timg.id} 
                    alt="Template Image"
                    src={`/images/${timg.url}`} 
                    className={`${templateName == timg.id && 'active'}`}
                  />
              </button>
            </div>
          ))}
        </div>        
        <div className="clsDivButtons" >
          <button className="btn btn-success rounded" type="button" onClick={saveTemplate}>Save & Next </button>
        </div>
      </div>
    </div>
  )
}

export default Template