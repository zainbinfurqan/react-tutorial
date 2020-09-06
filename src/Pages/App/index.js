import React, { useState } from 'react';
import Products from './Products'

export default function AppMainIndex() {

    const [state, setState] = useState({
        ID: 1, caName: 'mehran', model: '03wWe', carPrice: '100000 pkr',
        ID: 2, caName: '123', model: '03WEwe', carPrice: '100000 pkr',
        ID: 3, caName: 'mehrqwean', model: '03wEe', carPrice: '100000 pkr',
        ID: 4, caName: 'mehQWran', model: '03wEe', carPrice: '100000 pkr',
    })

    return (
        <>
            <Products state={state} />

        </>
    )
}