import AlgoliaPlaces from 'algolia-places-react';
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const config = {
  appId:process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey:process.env.REACT_APP_ALGOLIA_API_KEY,
}


const NewHotel = () => {

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

  const [preview, setpreview] = useState("https://via.placeholder.com/150/?text=PREVIEW");

  //destructuring values
  const {title,content,location,image,price,from,to,bed} = values;


  //event handler
  const handleSubmit = () =>{

  }

  const handleImageChange = (e) =>{
    //console.log( e.target.files[0]);
    setpreview(URL.createObjectURL(e.target.files[0]));
    setValues({...values, image:e.target.files[0]})

  }

  const handleChange = (e) =>{
    setValues({...values, [e.target.name] : e.target.value })
  }


  const hotelForm = () =>(
    <form onSubmit={handleSubmit} >
      <div className='form-group' >
        <label  className='btn btn-outline-secondary btn-block m-2 text-left'>
          Image
          <input type="file" name='image' onChange={handleImageChange} accept='image/*'  hidden/>
        </label>

        <input type="text" name="title" onChange={handleChange} placeholder='Title' className='form-control m-2' value={title} />

        <textarea type="text" name="content" onChange={handleChange} placeholder='Content' className='form-control m-2' value={content} />

        <AlgoliaPlaces className='form-control ml-2 mr-2' placeholder='location' defaultValue={location} optiona={config} onChange={({suggestion}) => setValues({...values, location: suggestion.value}) } style={{height:"50px"}}
        />

        <input type="number" name="price" onChange={handleChange} placeholder='Price' className='form-control m-2' value={price} />

        <input type="number" name="bed" onChange={handleChange} placeholder='Number of Beds' className='form-control m-2' value={bed} />
      </div>

      <DatePicker 
        placeholder='From Date' 
        className='form-control m-2' 
        onChange={( date, dateString ) => 
          setValues({...values, from:dateString})}  
        disabledDate={(current) => 
          current && current.valueOf() < moment().subtract(1, 'days')}
        />

      <DatePicker 
        placeholder='To Date' 
        className='form-control m-2' 
        onChange={( date, dateString ) => 
          setValues({...values, to:dateString})} 
        disabledDate={(current) => 
          current && current.valueOf() <   moment().subtract(1, 'days')}
      />

      <button className='btn btn-outline-primary m-2' >Save</button>
    </form>
  )

  return (
    <>
        <div className='container-fluid bg-secondary p-5 text-center' >
          <h2>Add Hotel</h2>
        </div>   

        <div className='container' >
          <div className='row' >
            <div className='col-md-10' >
              <br />
              
              {hotelForm()}
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