import React, { useState } from 'react';
import Products from './Products'

export default function AppMainIndex() {

    const [state, setState] = useState({
        caName: 'mehran', model: '03we', carPrice: '100000 pkr',
        caName: 'mehran', model: '03we', carPrice: '100000 pkr',
        caName: 'mehran', model: '03we', carPrice: '100000 pkr',
        caName: 'mehran', model: '03we', carPrice: '100000 pkr',
    })

    return (
        <>
            <Products state={state} />

        </>
    )
}