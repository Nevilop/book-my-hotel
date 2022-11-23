import React from 'react'
import { diffDays } from '../../actions/hotel'
import HotelImage from '../HotelImage'

const BookingCard = ( {hotel, session, orderedBy} ) => {
  return (
    <>
        <div className='card mb-3' >
            <div className='row no-gutter'>
                <div className='col-md-4'>
                <HotelImage h={hotel} />
                </div>

                <div className='col-md-8'>
                  <div className="card-body">
                    <h3 className='card-title' >
                     {hotel.title} {" "}
                     <span className='float-right text-primary' >
                      BDT {hotel.price}
                     </span> {" "}
                    </h3>
                    <p className='alert alert-info' >{hotel.location}</p>
                    <p className='card-text' >{hotel.content}</p>
                    <p className="card-text">
                      <span className='float-right text-primary' >
                         for {diffDays(hotel.from, hotel.to)}
                         {diffDays(hotel.from, hotel.to) <= 1 ? ' Day' : ' Days' }
                      </span>
                    </p>
                    <p className="card-text">{hotel.bed} Bed</p>
                    <p className="card-text">
                      Available from {new Date(hotel.from).toLocaleDateString()}
                    </p>

                  
                    <div className='d-flex justify-content-between h4' >
                      
                          <button className='btn btn-info'>
                            Show more
                          </button>
                       
                
                    </div>

                  </div>                    
                </div>
            </div>
        </div>

        {/* <pre>{JSON.stringify(hotel,null,4)}</pre> */}
    </>
  )
}

export default BookingCard