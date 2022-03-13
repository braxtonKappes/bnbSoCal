import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../store/review'
import './Reviews.css'

function Reviews({ spotId }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [review, setReview] = useState('')
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews))
    const spotReviews = reviews.filter(review => spotId == review.spotId)


    useEffect(() => {
        const loaded = async () => {
            await dispatch(getAllReviews())
            setIsLoaded(true)
        }
        loaded();
    }, [dispatch]);

    return (
        isLoaded && (
            <div className='reviewsMainContainer'>
                <div className='createReviewContainer'>
                    <div className='reviewLabel'>
                        <label>
                            Create a Review!
                        </label>
                    </div>
                    <div className='inputForReview'>
                        <input
                            type="text"
                            placeholder='How was your stay?'
                            value=''
                            onChange={(e) => setReview(e.target.value)}
                            required
                            />
                    </div>
                </div>
                <div className='outerReviewsContainer'>
                    <div className='reviewsContainer'>
                        {spotReviews.map(spotReview => (
                            <div key={spotReview.id} className='reviewContainer'>
                                <p className='reviewRating'>
                                    <i class="fa-solid fa-star"></i>  {spotReview.rating}
                                </p>
                                <p className='reviewsText'>
                                    {spotReview.review}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}


export default Reviews
