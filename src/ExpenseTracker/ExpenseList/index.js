import React, { useContext } from 'react';
import { ContextStore } from '../ExpenseTrackerProvider'

function ExpenseList(props) {
    const values = useContext(ContextStore)
    console.log("values=>", values)
    return (
        <div>
            {values.cars.map((_, i) => {
                return (
                    <div><p>{_.name}</p></div>
                )
            })}
        </div>
    )
}
export default ExpenseList