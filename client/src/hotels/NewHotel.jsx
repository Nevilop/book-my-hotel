import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HotelForm from '../components/forms/HotelForm';

// const config = {
//   appId:process.env.REACT_APP_ALGOLIA_APP_ID,
//   apiKey:process.env.REACT_APP_ALGOLIA_API_KEY,
// }




const NewHotel = () => {

  //redux
  const {auth} = useSelector(state => state);
  const {token} = auth;
  
//state
const [values, setValues] = useState({
  title: '',
  content: '',
  location: '',
  image: '',
  price: '',
  from: '',
  to: '',
  bed:''
});




  const [preview, setPreview] = useState("https://via.placeholder.com/150/?text=PREVIEW");



  return (
    <>
        <div className='container-fluid bg-secondary p-5 text-center' >
          <h2>Add Hotel</h2>
        </div>   

        <div className='container' >
          <div className='row' >
            <div className='col-md-10' >
              <br />
              
             <HotelForm values={values} setValues={setValues} setPreview={setPreview} token={token}/>
            </div>

            <div className='col-md-2' >
                <img src={preview} alt="preview_img" className='img img-fluid m-2'/>
               <pre>{JSON.stringify(values, null, 4)}</pre>
            </div>
          </div>
        </div> 
    </>
  )
}

export default NewHotel