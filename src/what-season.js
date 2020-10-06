const CustomError = require("../extensions/custom-error");

const season = {
    '0': 'winter',
    '1': 'winter',
    '2': 'spring',
    '3': 'spring',
    '4': 'spring',
    '5': 'summer',
    '6': 'summer',
    '7': 'summer',
    '8': 'autumn (fall)',
    '9': 'autumn (fall)',
    '10': 'autumn (fall)',
    '11': 'winter',
};

module.exports = function getSeason(date) {
    if (date === null || isNaN(date)) {
        return 'Unable to determine the time of year!'
    }

    if (Object.prototype.toString.call(date) !== '[object Date]'){
        throw Error()
    }

    const monthNumber = date.getMonth();

    return season[monthNumber]
};
