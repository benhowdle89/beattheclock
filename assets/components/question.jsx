import React, { Component } from 'react'

class Question extends Component {

    handleSelect = () => {
        this.props.selectQuestion(this.props.question.id)
    };

    render () {
        return (
            <div className={`question ${(this.props.question.selected && 'selected')}`}>
                <span className="button" onClick={this.handleSelect}>{this.props.question.text}</span>
            </div>
        )
    }
}

export default Question
