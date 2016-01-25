import React from 'react'
import moment from 'moment'

const Timer = ({ remaining }) => {
    let d = moment.duration(remaining, 'milliseconds'),
        seconds = d.asSeconds(),
        timeColor = 'good';
    if(seconds <= 5) {
        timeColor = 'bad'
    } else if (seconds <= 15){
        timeColor = 'warning'
    }
    return (
        <div className="timer">
            <p className={`time time-${timeColor}`}>{seconds}s</p>
        </div>
    )
}

export default Timer
