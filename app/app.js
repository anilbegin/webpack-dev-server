const {doubleMe, tripleMe, quadrupleMe} = require('./multiplier.js')

console.log(doubleMe(10))
console.log(tripleMe(20))
console.log(quadrupleMe(20))

document.querySelector('h2').innerText = 'hello world One' // to test that Browser is not even reloading
                                                           // if you change this value, So we can just inject
                                                           // the latest code without page relaod           


if(module.hot) {
    module.hot.accept()
}