import React, { useState } from "react";
import * as spotsActions from "../../store/spots";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './DeleteConfirm.css';

function DeleteConfirm( { setShowModal, spotId } ) {
    const dispatch = useDispatch();
    const history = useHistory()
    const handleCLick = async (e) => {
    e.preventDefault();
    await dispatch(spotsActions.delSpot(spotId));
    setShowModal(false);
    history.push('/spots')
    }

    return (
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
    );
}

export default DeleteConfirm;
