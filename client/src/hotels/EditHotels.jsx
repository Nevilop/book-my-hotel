import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { read } from '../actions/hotel';
import HotelEditForm from '../components/forms/HotelEditForm';


//const {Option} = Select;


const EditHotels = () => {
    const {auth} = useSelector(state => state);
    const {token} = auth;

    const [values, setValues] = useState({
        title: '',
        content: '',
        location: '',        
        price: '',
        from: '',
        to: '',
        bed:''
      });

      const [preview, setPreview] = useState("https://via.placeholder.com/150/?text=PREVIEW");


    const {hotelId} = useParams()
    useEffect(() =>{
        loadSellerHotel()
    },[])

    const loadSellerHotel = async () =>{
        let res = await read(hotelId)

        setValues({...values, ...res.data})
        setPreview(`${process.env.REACT_APP_API}/hotel/image/${res.data._id}`)

    }


  return (
    <>
        <div className='container-fluid bg-secondary p-5 text-center' >
            <h2>Edit Hotel</h2>
        </div>

        <div className="container-fluid" >
            <div className="row" >
                <div className="col-md-10">
                    <br />
                    <HotelEditForm values={values} setValues={setValues} setPreview={setPreview} token={token} hotelId={hotelId} />
                </div>
                <div className="col-md-2" >
                    <img className="img img-fluid m-2" src={preview} alt="preview img" />

                    <pre>{JSON.stringify(values, null, 4)}</pre>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditHotels