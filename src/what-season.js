const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === null) {
        return 'Unable to determine the time of year!'
    }
    if (typeof date.getMonth !== 'function'){
      throw new Error("THROWN")
    }


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

    const month = date.getMonth();

    let seasonElement = season[month];

    return seasonElement
};
