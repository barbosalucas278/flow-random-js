import { describe, expect, test } from "@jest/globals";
import flowRandom from "./flowRandom";
describe("Flow Random Module", () => {
  const TRIES: number = 1000;

  test("Si no se especifica la probabilidad deberia dejar pasar el 100% del flujo por defecto", () => {
    let counter: number = 0;

    for (let index: number = 0; index < TRIES; index++) {
      if (flowRandom()) {
        counter++;
      }
    }

    expect(counter).toBe(TRIES);
  });

  test("Si no se especifica la probabilidad deberia dejar pasar el 100% del flujo por defecto", () => {
    let counter: number = 0;
    const probability: number = 100;

    for (let index: number = 0; index < TRIES; index++) {
      if (flowRandom(probability)) {
        counter++;
      }
    }

    expect(counter).toBe(TRIES);
  });

  test("Si se especifica la probabilidad de 50 deberia dejar pasar el ~50% del flujo por defecto", () => {
    let counter: number = 0;
    const probability: number = 50;

    for (let index: number = 0; index < TRIES; index++) {
      if (flowRandom(probability)) {
        counter++;
      }
    }

    const expectedCount: number = TRIES * 0.5; // Cálculo del número esperado de éxitos según la probabilidad
    const allowedError: number = TRIES * 0.03; // Margen de error permitido

    expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
    expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
  });

  test("Si se especifica la probabilidad de 75 deberia dejar pasar el ~75% del flujo por defecto", () => {
    let counter: number = 0;
    const probability: number = 75;

    for (let index: number = 0; index < TRIES; index++) {
      if (flowRandom(probability)) {
        counter++;
      }
    }

    const expectedCount: number = TRIES * 0.75; // Cálculo del número esperado de éxitos según la probabilidad
    const allowedError: number = TRIES * 0.03; // Margen de error permitido

    expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
    expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
  });

  test("Si se especifica la probabilidad de 15 deberia dejar pasar el ~15% del flujo por defecto", () => {
    let counter: number = 0;
    const probability: number = 15;

    for (let index: number = 0; index < TRIES; index++) {
      if (flowRandom(probability)) {
        counter++;
      }
    }

    const expectedCount: number = TRIES * 0.15; // Cálculo del número esperado de éxitos según la probabilidad
    const allowedError: number = TRIES * 0.03; // Margen de error permitido

    expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
    expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
  });
});
