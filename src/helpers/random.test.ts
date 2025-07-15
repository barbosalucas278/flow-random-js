import { describe, expect, test } from "@jest/globals";
import { getPositiveRandomNumber } from "./random";
import { Limits } from "../models/limits";

describe("Random Helper", () => {
  const TRIES: number = 1000;

  test("If max param is null, max should be Number.MAX_SAFE_INTEGER for default", () => {
    const MIN_LIMIT: number = 0;
    const randomNumbers: Array<number> = [];
    const limits: Limits = {
      min: MIN_LIMIT,
    };

    for (let index: number = 0; index < TRIES; index++) {
      const randomNumber: number = getPositiveRandomNumber(limits);
      randomNumbers.push(randomNumber);
    }
    const result: boolean = randomNumbers.every(
      (number) => number <= Number.MAX_SAFE_INTEGER
    );

    expect(randomNumbers).toHaveLength(TRIES);
    expect(result).toBe(true);
  });

  test("If min param is null, min should be 0 for default", () => {
    const MAX_LIMIT: number = 100;
    const randomNumbers: Array<number> = [];
    const limits: Limits = {
      max: MAX_LIMIT,
    };

    for (let index: number = 0; index < TRIES; index++) {
      const randomNumber: number = getPositiveRandomNumber(limits);
      randomNumbers.push(randomNumber);
    }
    const resultMin: boolean = randomNumbers.every((number) => number >= 0);
    const resultMax: boolean = randomNumbers.every(
      (number) => number <= MAX_LIMIT
    );

    expect(randomNumbers).toHaveLength(TRIES);
    expect(resultMin).toBe(true);
    expect(resultMax).toBe(true);
  });

  test("If min and max param wasn't declare, the random number has been between min/max", () => {
    const MAX_LIMIT: number = 100;
    const MIN_LIMIT: number = 0;
    const randomNumbers: Array<number> = [];
    const limits: Limits = {
      max: MAX_LIMIT,
      min: MIN_LIMIT,
    };

    for (let index: number = 0; index < TRIES; index++) {
      const randomNumber: number = getPositiveRandomNumber(limits);
      randomNumbers.push(randomNumber);
    }
    const resultMin: boolean = randomNumbers.every(
      (number) => number >= MIN_LIMIT
    );
    const resultMax: boolean = randomNumbers.every(
      (number) => number <= MAX_LIMIT
    );

    expect(randomNumbers).toHaveLength(TRIES);
    expect(resultMin).toBe(true);
    expect(resultMax).toBe(true);
  });

  test("If min and max param wasn't declare, the random number has been between min/max default", () => {
    const MAX_LIMIT_DEFAULT: number = Number.MAX_SAFE_INTEGER;
    const MIN_LIMIT_DEFAULT: number = 0;
    const randomNumbers: Array<number> = [];

    for (let index: number = 0; index < TRIES; index++) {
      const randomNumber: number = getPositiveRandomNumber();
      randomNumbers.push(randomNumber);
    }
    const result: boolean = randomNumbers.every(
      (number) => number >= MIN_LIMIT_DEFAULT && number <= MAX_LIMIT_DEFAULT
    );

    expect(randomNumbers).toHaveLength(TRIES);
    expect(result).toBe(true);
  });

  test("If min and max param was cero, the random number has been between min/max default", () => {
    const MAX_LIMIT_DEFAULT: number = Number.MAX_SAFE_INTEGER;
    const MIN_LIMIT_DEFAULT: number = 0;
    const randomNumbers: Array<number> = [];
    const limits: Limits = { min: 0, max: 0 };
    
    for (let index: number = 0; index < TRIES; index++) {
      const randomNumber: number = getPositiveRandomNumber(limits);
      randomNumbers.push(randomNumber);
    }
    const result: boolean = randomNumbers.every(
      (number) => number >= MIN_LIMIT_DEFAULT && number <= MAX_LIMIT_DEFAULT
    );

    expect(randomNumbers).toHaveLength(TRIES);
    expect(result).toBe(true);
  });
});
