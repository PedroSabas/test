const { numerosParesInArray } = require('../funciones/allFunctions');
//34, 19, 17, 16, 31, 27, 2

test('numerosParesInArray,  insert numbers', () => {
    const respuesta = numerosParesInArray(34, 19, 17, 16, 31, 27, 2);
    expect(respuesta).toBe("NO");
});
describe('All the numbers from the array are not Pares', () => {
    it('SI', ()=> {
        expect().not.toBe("SI");
    });
    it('No to be null values', ()=> {
        const respuesta = numerosParesInArray(34, 19, 17, 16, 31, 27, 2);
        expect(respuesta).not.toBeNull();
    });
});