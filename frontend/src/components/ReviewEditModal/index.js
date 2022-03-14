import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewEditForm from './ReviewEditForm';
import './ReviewEditForm.css';

function ReviewEditModal( {spotId, spotReviewId} ) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i className="fa-regular fa-pen-to-square"  onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ReviewEditForm spotReviewId={spotReviewId} spotId={spotId} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default ReviewEditModal;
