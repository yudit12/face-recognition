import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({input,onInputChange,onButtonSubmit}) => {

  return (
   
    <div>
      
       {console.log(input)}
      <p className='f3'>
      {'This Brain will detect the face in the picture . Try it(; '}  
      </p>
      
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex'
           onChange={onInputChange}
          
        
           />

           
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >
          Detect</button>
          
        </div>
      </div>
      <p className='f3'>
      <br></br>
      {'*Please enter image, or URL of image '}
      </p>
    </div>
  );
}

export default ImageLinkForm;