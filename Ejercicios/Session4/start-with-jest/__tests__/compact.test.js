import { compact, suma } from "../compact"

describe('Compact function', () => {

    // test
    test('it remove falsy values', () => {
        const input = [0, 1, false, 2, '', 3];

        const output = [1, 2, 3];

        expect(compact(input)).toEqual(output);
    })

    test('prueba Suma', () => {
        const a = 2;
        const b = 3;
        const salida = 5;
        expect(suma(a,b)).toEqual(salida);
    })

    // test('map el array', () => { 

    // })

})