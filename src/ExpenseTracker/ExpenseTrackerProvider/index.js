
import React, { Component, createContext, useState } from "react";

export const ContextStore = createContext();

export const ExpensTrackerProvider = (props) => {

    const [cars, setCars] = useState(
        [
            { name: 'Honda', price: 100 },
            { name: 'BMW', price: 150 },
            { name: 'Mercedes', price: 200 }
        ]
    )

    return (
        <ContextStore.Provider
            value={{ cars: cars }}>
            {props.children}
        </ContextStore.Provider>
    )
}
