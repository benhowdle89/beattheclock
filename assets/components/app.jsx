import React, {Component} from 'react'
import RandomString from 'randomstring'

import Canvas from './canvas.jsx'
import Input from './input.jsx'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    id: RandomString.generate(6),
                    text: '2 + 2',
                    answer: '4',
                    selected: false
                }, {
                    id: RandomString.generate(6),
                    text: '1 / 1',
                    answer: '1',
                    selected: false
                }
            ]
        }
    }

    selectQuestion = (id) => {
        return this.setState({
            questions: this.state.questions.map(q => {
                q.selected = q.id == id
                return q
            })
        })
    };

    answerQuestion = (answer) => {
        let questions = this.state.questions
        let selected = questions.find(q => !!q.selected)
        if(selected && selected.answer == answer){
            let index = questions.indexOf(selected)
            questions.splice(index, 1)
            return this.setState({
                questions
            })
        }
    };

    render() {
        return (
            <div>
                <Canvas questions={this.state.questions} selectQuestion={this.selectQuestion} />
                <Input answerQuestion={this.answerQuestion} />
            </div>
        )
    }
}

export default App
