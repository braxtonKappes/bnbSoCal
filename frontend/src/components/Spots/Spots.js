import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spots'
import './Spots.css'

function Spots() {
    const dispatch = useDispatch();
    const spotsList = useSelector(state => Object.values(state.spots));
    const [isLoaded, setIsLoaded] = useState(false)
    console.log("this is spotsList,", spotsList);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getAllSpots())
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch]);

    return (
        isLoaded && spotsList.length > 0 && (
            <div className='mainBody'>
                <h1 className='bookingMadeEasy'>Booking Made Easy</h1>
                <div className='overallSpotsContainer'>
                    {spotsList.map(spot => (
                        <div key={spot.id} className='spotContainer'>
                            <Link to={`/spots/${spot.id}`}>
                                <img alt='spotImg' className='spotImage' src={spot.Images[0].url}></img>
                            <div className='infoContainer'>
                                <div className='cityAndState'>
                                    <p>{spot.city}, {spot.state}</p>
                                </div>
                                <div className='price'>
                                    {`$${spot.price} / night`}
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

export default Spots;
