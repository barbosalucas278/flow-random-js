import { describe, expect, test } from "@jest/globals";
import { getPositiveRandomNumber } from "./random";
describe("Random Helper", function () {
    var TRIES = 1000;
    test("If max param is null, max should be Number.MAX_SAFE_INTEGER for default", function () {
        var MIN_LIMIT = 0;
        var randomNumbers = [];
        var limits = {
            min: MIN_LIMIT,
        };
        for (var index = 0; index < TRIES; index++) {
            var randomNumber = getPositiveRandomNumber(limits);
            randomNumbers.push(randomNumber);
        }
        var result = randomNumbers.every(function (number) { return number <= Number.MAX_SAFE_INTEGER; });
        expect(randomNumbers).toHaveLength(TRIES);
        expect(result).toBe(true);
    });
    test("If min param is null, min should be 0 for default", function () {
        var MAX_LIMIT = 100;
        var randomNumbers = [];
        var limits = {
            max: MAX_LIMIT,
        };
        for (var index = 0; index < TRIES; index++) {
            var randomNumber = getPositiveRandomNumber(limits);
            randomNumbers.push(randomNumber);
        }
        var resultMin = randomNumbers.every(function (number) { return number >= 0; });
        var resultMax = randomNumbers.every(function (number) { return number <= MAX_LIMIT; });
        expect(randomNumbers).toHaveLength(TRIES);
        expect(resultMin).toBe(true);
        expect(resultMax).toBe(true);
    });
    test("If min and max param has declared, the random number has been between min/max", function () {
        var MAX_LIMIT = 100;
        var MIN_LIMIT = 0;
        var randomNumbers = [];
        var limits = {
            max: MAX_LIMIT,
            min: MIN_LIMIT,
        };
        for (var index = 0; index < TRIES; index++) {
            var randomNumber = getPositiveRandomNumber(limits);
            randomNumbers.push(randomNumber);
        }
        var resultMin = randomNumbers.every(function (number) { return number >= MIN_LIMIT; });
        var resultMax = randomNumbers.every(function (number) { return number <= MAX_LIMIT; });
        expect(randomNumbers).toHaveLength(TRIES);
        expect(resultMin).toBe(true);
        expect(resultMax).toBe(true);
    });
    test("If min and max param has not declared, the random number has been between min/max default", function () {
        var MAX_LIMIT_DEFAULT = Number.MAX_SAFE_INTEGER;
        var MIN_LIMIT_DEFAULT = 0;
        var randomNumbers = [];
        for (var index = 0; index < TRIES; index++) {
            var randomNumber = getPositiveRandomNumber();
            randomNumbers.push(randomNumber);
        }
        var result = randomNumbers.every(function (number) { return number >= MIN_LIMIT_DEFAULT && number <= MAX_LIMIT_DEFAULT; });
        expect(randomNumbers).toHaveLength(TRIES);
        expect(result).toBe(true);
    });
});
