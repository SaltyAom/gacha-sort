"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Slept sort
 * @param { number[] } array Array of number to be sorted.
 * @returns { Promise } Sorted array.
 */
exports.default = (array) => new Promise(resolve => {
    let haventSort = true;
    while (haventSort) {
        let originalArray = [...array], _sorted = [];
        while (originalArray.length) {
            let randomize = Math.floor((Math.random() * array.length - _sorted.length));
            _sorted.push(originalArray[randomize]);
            originalArray.splice(randomize, 1);
        }
        let isSorted = _sorted.every((value, index) => {
            if (!index)
                return true;
            return value >= _sorted[index - 1];
        });
        if (isSorted) {
            haventSort = false;
            resolve(_sorted);
        }
    }
});
//# sourceMappingURL=index.js.map