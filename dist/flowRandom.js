import { getPositiveRandomNumber } from './helpers/random.js';
var DEFAULT_PROBABILITY = 100;
var MIN_RANDOM_LIMIT = 0;
var MAX_RANDOM_LIMIT = 100;
var flowRandom = function (probability) {
    if (probability === void 0) { probability = DEFAULT_PROBABILITY; }
    var limits = {
        min: MIN_RANDOM_LIMIT,
        max: MAX_RANDOM_LIMIT,
    };
    var randomNumber = getPositiveRandomNumber(limits);
    // Calcula un rango dentro de los límites basado en la probabilidad
    var range = MAX_RANDOM_LIMIT - MIN_RANDOM_LIMIT;
    var adjustedProbability = (range * probability) / 100; // Calcula la probabilidad ajustada dentro del rango
    return randomNumber <= adjustedProbability;
};
export default flowRandom;
