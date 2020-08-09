import React, { useEffect, useState } from 'react';
// import "node_modules/video-react/dist/video-react.css"; // import css
import { Player, ControlBar, PlayToggle } from 'video-react';
import Modal from '../Model'
import Root_Video from '../Root-Video'
import api from '../../utils/api_1';
function Home_1(props) {



    let player
    const [postData, setPostData] = useState([])
    const [backGroundVideo, setBackGroundVideo] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            let body = { name: 'zain', pass: '123' }
            const response = await api.apiMethod();
            console.log("response=>", response)
        } catch (error) {

        }
    }

    function close() {
        setBackGroundVideo(!backGroundVideo)
    }

    return (
        <div style={{ margin: 'auto 0', justifyContent: 'ceter' }}>
            {postData.map((item, index) => {
                return (
                    <div style={{
                        margin: '0 auto',
                        marginTop: 10,
                        border: 'solid 1px',
                        minHeight: 50,
                        width: 500, padding: 10,
                    }}>
                        <p>Title: {item.title}</p>
                        <p>{item.body}</p>
                        <div style={{ height: '320px' }}>
                            <Player poster="Assets/Images/default_thumbnail.jpg" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" className='video-player' >
                                <PlayToggle />
                                <ControlBar autoHide={true} disableDefaultControls={true} className="my-class" >
                                </ControlBar>
                            </Player>
                            <button onClick={() => setBackGroundVideo(!backGroundVideo)}>opne</button>
                        </div>

                    </div>
                )
            })}
            {backGroundVideo && <Modal>
                <Root_Video close={close} />
            </Modal>}
        </div>
    )
}

export default Home_1