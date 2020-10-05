const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let result = 0;

    [...matrix].forEach(value => {
      [...value].forEach(value1 => {
        if (value1 === "^^") result++
      })
    });

    return result;
};
