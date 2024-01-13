import { describe, expect, test } from '@jest/globals.js';
import flowRandom from './flowRandom.js';
describe("Flow Random Module", function () {
    var TRIES = 1000;
    test("Si no se especifica la probabilidad deberia dejar pasar el 100% del flujo por defecto", function () {
        var counter = 0;
        for (var index = 0; index < TRIES; index++) {
            if (flowRandom()) {
                counter++;
            }
        }
        expect(counter).toBe(TRIES);
    });
    test("Si no se especifica la probabilidad deberia dejar pasar el 100% del flujo por defecto", function () {
        var counter = 0;
        var probability = 100;
        for (var index = 0; index < TRIES; index++) {
            if (flowRandom(probability)) {
                counter++;
            }
        }
        expect(counter).toBe(TRIES);
    });
    test("Si se especifica la probabilidad de 50 deberia dejar pasar el ~50% del flujo por defecto", function () {
        var counter = 0;
        var probability = 50;
        for (var index = 0; index < TRIES; index++) {
            if (flowRandom(probability)) {
                counter++;
            }
        }
        var expectedCount = TRIES * 0.5; // Cálculo del número esperado de éxitos según la probabilidad
        var allowedError = TRIES * 0.03; // Margen de error permitido
        expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
        expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
    });
    test("Si se especifica la probabilidad de 75 deberia dejar pasar el ~75% del flujo por defecto", function () {
        var counter = 0;
        var probability = 75;
        for (var index = 0; index < TRIES; index++) {
            if (flowRandom(probability)) {
                counter++;
            }
        }
        var expectedCount = TRIES * 0.75; // Cálculo del número esperado de éxitos según la probabilidad
        var allowedError = TRIES * 0.03; // Margen de error permitido
        expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
        expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
    });
    test("Si se especifica la probabilidad de 15 deberia dejar pasar el ~15% del flujo por defecto", function () {
        var counter = 0;
        var probability = 15;
        for (var index = 0; index < TRIES; index++) {
            if (flowRandom(probability)) {
                counter++;
            }
        }
        var expectedCount = TRIES * 0.15; // Cálculo del número esperado de éxitos según la probabilidad
        var allowedError = TRIES * 0.03; // Margen de error permitido
        expect(counter).toBeGreaterThanOrEqual(expectedCount - allowedError);
        expect(counter).toBeLessThanOrEqual(expectedCount + allowedError);
    });
});
