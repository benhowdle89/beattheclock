import React, { Component } from 'react'

class Input extends Component {

    handleKeyUp = (event) => {
        if(event.which == 13){
            this.props.answerQuestion(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    };

    render () {
        return (
            <div>
                <input type="text" placeholder="Answer here..." onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default Input
