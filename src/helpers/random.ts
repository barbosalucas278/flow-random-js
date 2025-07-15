import { Limits } from "../models/limits";

export const getPositiveRandomNumber = (limits?: Limits): number => {
  const minLimit: number = limits?.min && limits?.min !== 0 ? limits?.min : 0;
  const maxLimit: number = limits?.max && limits?.max !== 0 ? limits?.max : Number.MAX_SAFE_INTEGER;

  const _min: number = Math.ceil(minLimit);
  const _max: number = Math.floor(maxLimit);
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
};
