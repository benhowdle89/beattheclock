import React, { Component } from 'react'

class Question extends Component {

    handleSelect = () => {
        this.props.selectQuestion(this.props.question.id)
    };

    render () {
        return (
            <div>
                <p onClick={this.handleSelect}>{this.props.question.text}{(this.props.question.selected && 'SELECTED')}</p>
            </div>
        )
    }
}

export default Question
