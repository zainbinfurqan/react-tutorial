import React, { } from 'react';
import { ExpensTrackerProvider } from './ExpenseTrackerProvider'
import ExpenseList from './ExpenseList'

function ExpenseTracker(props) {
    return (
        <ExpensTrackerProvider>
            <ExpenseList />
        </ExpensTrackerProvider>
    )
}

export default ExpenseTracker