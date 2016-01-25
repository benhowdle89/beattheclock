import RandomString from 'randomstring'

let data = [
    '[1, 4, 6, 5, 7].length',
    'null == undefined',
    '["neo", "morpheus", "trinity", null, "ghost"][2]',
    '"abc".split("")[0]',
    'Object.keys({foo: "bar", bar: "foo"})[1]',
    '/321/.test("123")',
    'Math.round(0.3 + 0.4)',
    '["foo", "bar", "baz"].reverse().join().slice(0, 3)',
    '[null, false, undefined].filter(Boolean)',
    'Number("2") - 1 == 1',
    '(true + false) < 2 - true',
    'new Array(2).toString().slice(-1)'
]

export const questions = data.map(d => {
    let answer = eval(d)
    if(Array.isArray(answer) && !answer.length){
        answer = "[]"
    }
    if(typeof answer == 'boolean'){
        answer = answer.toString()
    }
    return {
        text: d,
        selected: false,
        id: RandomString.generate(6),
        answer
    }
})

export const total = questions.length
