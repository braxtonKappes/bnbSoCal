import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditModal from './EditForm';
import './EditForm.css';

function EditModal( { spot } ) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <i class="fa-regular fa-pen-to-square"  onClick={() => setShowModal(true)}></i>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditModal spot={spot}/>
        </Modal>
        )}
    </>
    );
}

export default EditModal;
