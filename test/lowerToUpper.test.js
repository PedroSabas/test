const { letras } = require('../funciones/allFunctions');
test('getUpperCaseLetter', () => {
    const resul = letras("hola mundo");
    expect(resul).toBe("HOLA MUNDO");
    expect(resul).toEqual(expect.anything());
});
describe('getUpperCase', () => {
    describe('When letter convert to UpperCase successfully', () => {
        it('Then return something', () => {
            const resul = letras("hola mundo");
            expect(resul).toBe("HOLA MUNDO");
            expect(resul).toEqual(expect.anything());
        });
    });
    describe('When letter NOT convert to UpperCase', () => {
        it('Then throwan error', () => {
            const resul = letras("hola mundo");
            expect(resul).toThrow();
        });
    });
});