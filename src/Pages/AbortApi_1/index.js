import React, { } from 'react';


export default function AbortApi() {


    const abortApi = new AbortController()


    async function FetchData() {

        setTimeout(() => {
            console.log('abort')
            abortApi.abort()
        }, 2000);

        console.log('fetch')
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', { signal: abortApi.signal });
            const json = await response.json();
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button onClick={FetchData}>Call Api</button>
        </div>
    )
}