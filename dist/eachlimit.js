"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _options = {
    delay: 0,
};
function eachLimit(array, limit, run, options) {
    const delay = options?.delay ? options.delay : _options.delay;
    array = array.concat([]);
    const length = array.length;
    const results = new Array(length);
    return new Promise(resolveAll => {
        let runningJobs = 0;
        let nextItem = 0;
        function next() {
            if (nextItem < length && runningJobs < limit) {
                runningJobs++;
                const currentIndex = nextItem;
                run(array[nextItem], nextItem).then(result => {
                    results[currentIndex] = result;
                    runningJobs--;
                    if (nextItem == length && runningJobs == 0)
                        resolveAll(results);
                    else
                        next();
                });
                nextItem++;
            }
        }
        if (length == 0) {
            resolveAll(results);
        }
        else {
            for (let i = 0; i < limit && i < length; i++) {
                setTimeout(next, i * delay);
            }
        }
    });
}
eachLimit.setOptions = function (options) {
    if (options.delay !== undefined)
        _options.delay = options.delay;
};
exports.default = eachLimit;
