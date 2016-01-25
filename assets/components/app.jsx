import React, {Component} from 'react'

import Layout from './layout.jsx'
import Canvas from './canvas.jsx'
import Input from './input.jsx'
import Timer from './timer.jsx'
import Score from './score.jsx'
import Start from './start.jsx'
import Finished from './finished.jsx'
import { questions, total } from './../config/questions'

let remainingTimer = null
const STARTING_TIME = 1000000

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions,
            score: 0,
            total,
            remaining: STARTING_TIME,
            finished: false,
            started: false
        }
    }

    start = () => {
        return this.setState({
            started: true
        }, () => {
            remainingTimer = setInterval(() => {
                let remaining = this.state.remaining - 1000
                if(remaining == 0){
                    this.finish()
                }
                return this.setState({
                    remaining
                })
            }, 1000)
        })
    };

    reset = () => {
        return this.setState({
            finished: false,
            started: false,
            remaining: STARTING_TIME
        })
    };

    finish() {
        clearInterval(remainingTimer)
        return this.setState({
            finished: true
        })
    }

    selectQuestion = (id) => {
        this.setState({
            questions: this.state.questions.map(q => {
                return {
                    ...q,
                    selected: q.id == id
                }
            })
        })
    };

    answerQuestion = (answer) => {
        let questions = this.state.questions
        let selected = questions.find(q => !!q.selected)
        if(selected && selected.answer == answer){
            let score = ++this.state.score
            if(score == this.state.total){
                return this.finish()
            }
            let index = questions.indexOf(selected)
            questions.splice(index, 1)
            return this.setState({
                questions,
                score,
                remaining: this.state.remaining + 5000
            })
        }
    };

    render() {

        return (
            <Layout>
                {(!this.state.started) && (
                    <Start onStart={this.start} />
                )}

                {(this.state.finished) && (
                    <Finished onRetry={this.reset} score={this.state.score} />
                )}

                {(this.state.started && !this.state.finished) && (
                    <div>
                        <div className="stats">
                            <Score {...this.state} />
                            <Timer {...this.state} />
                        </div>
                        <Canvas questions={this.state.questions} selectQuestion={this.selectQuestion} />
                        <Input answerQuestion={this.answerQuestion} selected={this.state.questions.some(q => q.selected)} />
                    </div>
                )}
            </Layout>
        )
    }
}

export default App
