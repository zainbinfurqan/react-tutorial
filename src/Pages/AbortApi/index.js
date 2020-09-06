import React, { } from 'react';

export default function AbortApi(props) {

    const abortController = new AbortController()

    async function fetchApi() {
        setTimeout(() => { abortController.abort() }, 2000);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', { signal: abortController.signal });
            const json = await response.json()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <button onClick={fetchApi}>Call Api</button>
            <button onClick={() => abortController.abort()}>Abort Api</button>

        </div>
    )
}