import React, { useState } from 'react';
import Modal from './Modal'





export default function AppMainIndex() {

    const [isOpne, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => { console.log('clicked') }}>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpne} close={() => setIsOpen(false)}>Some other content in modal</Modal>
            </div>
            <div>
                <p>some content on page</p>
            </div>

        </>
    )
}