
import React, { createContext, useState, useReducer } from "react";
import ProductReducer from '../ProductReducer'
const initializeState = []

export const ContextStore = createContext(initializeState);

export const ProductProvider = (props) => {

    const [state, dispatch] = useReducer(ProductReducer, initializeState)

    function addProduct(data) {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { ...data }
        })
    }
    return (
        <ContextStore.Provider
            // value={[expense, setExpense]}>
            value={{
                products: state, addProduct
            }}>
            {props.children}
        </ContextStore.Provider>
    )
}
