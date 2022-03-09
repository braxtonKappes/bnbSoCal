import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spots'
import './Spots.css'

function Spots() {
    const dispatch = useDispatch();
    const spotsList = useSelector(state => state.spots.list);

    useEffect(() => {
            dispatch(getAllSpots())
        }, [dispatch]);

    return (
            <div className='overallContainer'>
                {spotsList.map(spot => (
                    <div key={spot.id} className='spotsContainer'>
                        {console.log(spot.Images)}
                        <Link to={`/spots/${spot.id}`}>
                            <img alt='spotImg' className='spotImage' src={spot.Images[0].url}></img>
                        </Link>
                    </div>
                ))}
            </div>
    )
}

export default Spots;
