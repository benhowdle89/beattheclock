import React from 'react'
import { TwitterButton } from 'react-social'

const Finished = ({ onRetry, score }) => {
    return (
        <div>
            <p>You got {score}</p>
            <button onClick={onRetry}>Retry!</button>
            <TwitterButton message="I got 3 on quiz" url={window.location.href}>
                Share
            </TwitterButton>
        </div>
    )
}

export default Finished
