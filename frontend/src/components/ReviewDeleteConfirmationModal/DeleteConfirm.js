import React, { useState, useEffect } from "react";
import * as reviewsActions from "../../store/review";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './DeleteConfirm.css';

function DeleteConfirm( { setShowModal, spotId, spotReviewId } ) {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        const loaded = async () => {
            setIsLoaded(true)
        }
        loaded();
    }, [dispatch]);

    const handleCLick = async (e) => {
    e.preventDefault();
    await dispatch(reviewsActions.delReview(spotReviewId));
    setShowModal(false);
    history.push(`/spots/${spotId}`)
    }

    return (
        isLoaded && (
            <div className="formContainer">
                <div className='deleteConfirm' onClick={handleCLick}>
                    <h1>Are you sure you want to delete?</h1>
                    <div className="deleteButtonContainer">
                        <button className="submitButton" type="submit">Submit</button>
                        <button className="cancelButton" type='button' onClick={ () => setShowModal(false) }>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default DeleteConfirm;
