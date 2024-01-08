const [odd, even] = require('./var')

function checkStringOddOrEven(n) {
    if (n.length % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkStringOddOrEven;