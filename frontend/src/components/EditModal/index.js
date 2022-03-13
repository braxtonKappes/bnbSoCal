import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';
import './EditForm.css';

function EditModal( { spot, spotId } ) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i className="fa-regular fa-pen-to-square"  onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditForm spot={spot} spotId={spotId} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
    );
}

export default EditModal;
