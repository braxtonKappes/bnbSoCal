import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteConfirm from './DeleteConfirm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button className='loginButton' onClick={() => setShowModal(true)}><i class="fa-solid fa-trash-can"></i></button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
        </Modal>
        )}
    </>
    );
}

export default LoginFormModal;
