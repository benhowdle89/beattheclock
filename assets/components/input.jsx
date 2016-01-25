import React, { Component } from 'react'

class Input extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.selected){
            this._input.focus()
        }
    }

    handleKeyUp = (event) => {
        if(event.which == 13){
            this.props.answerQuestion(event.currentTarget.value)
            event.currentTarget.value = ''
        }
    };

    render () {
        return (
            <div>
                <input ref={(c) => this._input = c} type="text" placeholder="Answer here..." onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default Input
