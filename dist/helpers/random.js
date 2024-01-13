export var getPositiveRandomNumber = function (limits) {
    var minLimit = (limits === null || limits === void 0 ? void 0 : limits.min) ? limits === null || limits === void 0 ? void 0 : limits.min : 0;
    var maxLimit = (limits === null || limits === void 0 ? void 0 : limits.max) ? limits === null || limits === void 0 ? void 0 : limits.max : Number.MAX_SAFE_INTEGER;
    var _min = Math.ceil(minLimit);
    var _max = Math.floor(maxLimit);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
};
