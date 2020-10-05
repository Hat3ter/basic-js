const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    let result = '';

    [...members].forEach(value => {
        if (typeof value === 'string' && value !== '') {
            let valueElement = value.trim()[0];
            if (valueElement !== '' || valueElement !== ' ') {
                result += valueElement.toUpperCase()
            }
        }
    });
    if (result === '') return;

    return result.split('').sort().reduce((previousValue, currentValue) => previousValue + currentValue);
};
