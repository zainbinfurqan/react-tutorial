import React, { useEffect } from 'react';

export default function AbortApi(props) {

    const abortController = new AbortController()

    // useEffect(() => {
    //     return () => {
    //         abortController.abort()
    //     }
    // }, [])

    async function fetchApi() {
        console.log("fetch")
        setTimeout(() => { console.log("abort"); abortController.abort() }, 2000);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', { signal: abortController.signal });
            console.log(response)
            const json = await response.json()
            console.log(json)

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