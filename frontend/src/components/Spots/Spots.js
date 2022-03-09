import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Spots.css'

function Spots() {
    const dispatch = useDispatch();
    const allSpots = useSelector(state => state.spots.list);

    useEffect(() => {
        dispatch(getAllSpots())
    }, []);

    return (
    <div className='Spots'>
        <div>

        </div>
    </div>
    )
}

export default Spots;
