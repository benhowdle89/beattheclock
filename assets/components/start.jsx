import React from 'react'

const Start = ({ onStart }) => {
    return (
        <div className="start">
            <h1>Beat the Clock</h1>
            <p>The rules:</p>
            <ul className="rules">
                <li>The clock will start at 20s and run down to zero</li>
                <li>Every correct answer will add 5s back to your remaining time</li>
                <li>Simply select a question to begin answering it</li>
                <li>The aim is to answer as many as possible in the time remaining!</li>
            </ul>
            <button onClick={onStart}>Start!</button>
        </div>
    )
}

export default Start
