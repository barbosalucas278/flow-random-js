import { getPositiveRandomNumber } from "./helpers/random";
import { Limits } from "./models/limits";

const DEFAULT_PROBABILITY: number = 100;
const MIN_RANDOM_LIMIT: number = 0;
const MAX_RANDOM_LIMIT: number = 100;

const flowRandom = (probability: number = DEFAULT_PROBABILITY): boolean => {
  const limits: Limits = {
    min: MIN_RANDOM_LIMIT,
    max: MAX_RANDOM_LIMIT,
  };

  const randomNumber: number = getPositiveRandomNumber(limits);
  // Calcula un rango dentro de los límites basado en la probabilidad
  const range: number = MAX_RANDOM_LIMIT - MIN_RANDOM_LIMIT;
  const adjustedProbability: number = (range * probability) / 100; // Calcula la probabilidad ajustada dentro del rango

  return randomNumber <= adjustedProbability;
};
export default flowRandom;
