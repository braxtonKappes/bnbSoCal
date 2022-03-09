import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spots'
import './Spots.css'

function Spots() {
    const dispatch = useDispatch();
    const spotsList = useSelector(state => state.spots.list);
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        const load = async() => {
            await dispatch(getAllSpots())
            setIsLoaded(true)
        }
        load()
    }, []);

    return (
        isLoaded && (
            <div className='overallContainer'>
                {spotsList.map(spot => (
                    <div key={spot.id} className='spotsContainer'>
                        <Link to={`/spots/${spot.id}`}>
                            <img className='spotImage' src={spot.Images.url}></img>
                        </Link>
                    </div>
                ))}
            </div>
        )
    )
}

export default Spots;
