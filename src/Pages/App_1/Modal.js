import React, { } from 'react';
import ReactDom from 'react-dom'

const MAIN_DIV_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000
}

const OVERLAP_DIV_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    right: 0,
    zIndex: 1000
}


export default function Modal(props) {
    if (!props.open) return null
    return ReactDom.createPortal(
        <>
            <div style={OVERLAP_DIV_STYLE} />
            <div style={MAIN_DIV_STYLE}>
                <button onClick={props.close}>close Modal</button>
                {props.children}

            </div>
        </>,
        document.getElementById('video-root')
    )
}