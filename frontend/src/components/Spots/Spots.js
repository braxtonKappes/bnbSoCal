import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import './Spots.css'
import { getAllSpots } from '../../store/spots'

function Spots() {
    const dispatch = useDispatch();
    const spotsList = useSelector(state => state.spots.list);

    useEffect(() => {
        dispatch(getAllSpots())
    }, []);

    return (
    <div className='Spots'>
        {spotsList.map(spot => (
            <div key={`${spot.name}`}></div>
        ))}
    </div>
    )
}

export default Spots;
