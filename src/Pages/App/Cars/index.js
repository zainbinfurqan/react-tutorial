import React, { useState, useContext } from 'react';
// import CarsItems from './CarsItems'
import { ContextStore } from '../ProductProvider'

export default function Cars(props) {

    const { products } = useContext(ContextStore)
    return (
        <>
            {/* {products && products.map((_, i) => {
                return (
                    <CarsItems items={_} />
                )
            })} */}
        </>
    )
}