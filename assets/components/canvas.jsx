import React, { Component } from 'react'

import Question from './question.jsx'

class Canvas extends Component {
    render () {
        return (
            <div>
                {this.props.questions.map(q => <Question selectQuestion={this.props.selectQuestion} key={q.id} question={q} /> )}
            </div>
        )
    }
}

export default Canvas
