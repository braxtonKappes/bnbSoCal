import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import './Spots.css'
import { getAllSpots } from '../../store/spots'

function Spots() {
    const dispatch = useDispatch();
    // const allSpots = useSelector(state => state.spots.list);

    useEffect(() => {
        dispatch(getAllSpots())
    }, []);

    return (
    <div className='Spots'>
        
    </div>
    )
}

export default Spots;
