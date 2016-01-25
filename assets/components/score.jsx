import React from 'react'

const Score = ({ score, total }) => {
    return (
        <div className="score">
            <p>Score: <span className="score-value">{score}</span> / {total}</p>
        </div>
    )
}

export default Score
