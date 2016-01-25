import React from 'react'
import moment from 'moment'

const Timer = ({ remaining }) => {
    let d = moment.duration(remaining, 'milliseconds'),
        seconds = d.asSeconds()
    return (
        <p>{seconds}s</p>
    )
}

export default Timer
