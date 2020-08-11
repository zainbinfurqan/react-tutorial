import React, { useState } from 'react';
import Modal from './Modal'

export default function AppMainIndex() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => console.log('clicked')}>
                <button onClick={() => setIsOpen(true)}>Opn Modal</button>
                <Modal open={isOpen} close={() => setIsOpen(false)}>
                    <p>Some other content on modal</p>
                </Modal>
            </div>
            <div>
                <p>Some other content on page</p>
            </div>
        </>
    )
}