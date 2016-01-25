import RandomString from 'randomstring'

let data = [
    {
        text: '2 + 2',
        answer: '4'
    }, {
        text: '1 / 1',
        answer: '1'
    }, {
        text: 'null === undefined',
        answer: 'false'
    }
]

export const questions = data.map(d => {
    return {
        ...d,
        selected: false,
        id: RandomString.generate(6)
    }
})

export const total = questions.length
