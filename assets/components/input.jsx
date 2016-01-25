import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Input extends Component {

    componentWillReceiveProps(nextProps) {
        ReactDOM.findDOMNode(this.refs.input).focus()
    }

    handleKeyUp = (event) => {
        if(event.which == 13){
            this.props.answerQuestion(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    };

    render () {
        return (
            <div className="question-input">
                <input disabled={!this.props.selected} ref="input" type="text" placeholder="Answer here..." onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default Input
