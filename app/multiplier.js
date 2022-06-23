function createMultiplier(multiplier)
{
    return function(x) {
        return x*multiplier
    }
}

let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3)
let quadrupleMe = createMultiplier(4)

module.exports = {doubleMe, tripleMe, quadrupleMe}