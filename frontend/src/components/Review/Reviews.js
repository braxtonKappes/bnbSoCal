import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as reviewActions from '../../store/review'
import ReviewDeleteConfirmationModal from '../ReviewDeleteConfirmationModal/index'
import ReviewEditModal from '../ReviewEditModal/index'
import { useHistory } from 'react-router-dom';
import './Reviews.css'

function Reviews({ spotId }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState([])
    const [isUser, setIsUser] = useState(false)
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(state => Object.values(state.reviews.allReviews));


    useEffect(() => {
        const loaded = async () => {
            await dispatch(reviewActions.getAllReviews(spotId))
            setIsLoaded(true)
        }
        loaded();
    }, [dispatch]);

    const handleClick = async (e) => {
        e.preventDefault();
        setErrors([]);

        const data = {
            review,
            rating,
            userId: currentUser.id,
        }
        try {
            await dispatch(reviewActions.createReview(data, spotId))
            history.push(`/spots/${spotId}`)
            // window.location.reload()
        } catch (err) {
            const data = await err.json();
            if (data && data.errors) setErrors(data.errors);
        }
    }

    const filteredErrors = errors.filter(error => error !== 'Invalid value')

    return (
        isLoaded && (
            <div className='reviewsMainContainer'>
                <div className='createReviewContainer'>
                    <form className='reviewForm'>
                        <div className='reviewErrorContainer'>
                            <ul className={filteredErrors.length > 0 ? "errorList" : "hideErrorList"}>
                                {filteredErrors.map((error, idx) => (
                                    <li key={idx}>{error}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='reviewLabel'>
                            <label>
                                Create a Review!
                            </label>
                        </div>
                        <div className='inputForReview'>
                            <input
                                type="text"
                                placeholder='How was your stay?'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                                />
                                <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                >
                                    <option></option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                                <button onClick={handleClick} className="submitButton">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='outerReviewsContainer'>
                    <div className='reviewsContainer'>
                        {reviews.map(spotReview => (
                            <div key={spotReview.id} className='reviewContainer'>
                                <p className='reviewRating'>
                                    <i className="fa-solid fa-star"></i>  {spotReview.rating}
                                </p>
                                <p className='reviewsText'>
                                    {spotReview.review}
                                </p>
                                <div>
                                    <div className='reviewDeleteButton'>
                                        <ReviewDeleteConfirmationModal spotReviewId={spotReview.id} spotId={spotId}/>
                                    </div>
                                    <div className='reviewEditButton'>
                                        <ReviewEditModal spotReviewId={spotReview.id} spotId={spotId}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}


export default Reviews
