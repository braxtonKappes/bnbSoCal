import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spots'
import { useParams, useHistory } from 'react-router-dom';
import DeleteConfirmationModal from '../DeleteConfirmationModal/index'
import EditModal from '../EditModal/index'
import Reviews from '../Review/Reviews'
import './SpotPage.css'

function SpotPage() {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.oneSpot);
    const [isUser, setIsUser] = useState(false)
    const currentUser = useSelector(state => state.session.user)
    const { spotId } = useParams();

    const checkUser = async () => {
        if (currentUser?.id === spot.userId) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getOneSpot(spotId));
            await checkUser();
            setIsLoaded(true)
        }
        loaded()
    }, [dispatch, isUser, isLoaded]);

    return (
        isLoaded && (
        <div className='mainBodyBackGround'>
            <div className='mainBody'>
                <div className='outerSpotInfoContainer'>
                    <div className='allSpotInfo'>
                        <div className='topSection'>
                            <div className='spotNameContainer'>
                                <h1 className='spotName'>{spot.name}</h1>
                            </div>

                        </div>
                        <div className='middleSection'>
                            <div className='spotImgsContainer'>
                                <img alt='spotImg' className='spotPageImg' src={spot.Images[0].url}></img>
                            </div>
                        </div>
                        <div className='bottomSection'>
                            <div className='cityStateCountryContainer'>
                                <span>{spot.city}, {spot.state}, {spot.country}</span>
                            </div>
                            {isUser && (
                            <div className='spotsDeleteAndEditButtonsContainer'>
                                <div className='spotsDeleteAndEditButtons'>
                                    <DeleteConfirmationModal spotId={spotId}/>
                                    <EditModal spot={spot} spotId={spotId}/>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='reviewSection'>
                    <Reviews spotId={spotId}/>
                </div>
            </div>
        </div>
        )
    )
}

export default SpotPage
