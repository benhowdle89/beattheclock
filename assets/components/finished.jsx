import React from 'react'
import { TwitterButton } from 'react-social'

const Finished = ({ onRetry, score, total }) => {
    let face = ':)',
        perc = (score / total) * 100
    if (perc <= 40) {
        face = ':('
    } else if(perc <= 75){
        face = ':|'
    }
    return (
        <div className="finished">
            <p className="centered">You got:</p>
            <p className="score-value centered">{score}</p>
            <p className="face centered">{face}</p>
            <hr />
            <button onClick={onRetry}>Retry</button>
            <TwitterButton message={`I got to ${score} on Beat the Clock`} url={window.location.href}>
                Share
            </TwitterButton>
        </div>
    )
}

export default Finished
