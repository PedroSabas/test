const { longuitudDeString } = require('../funciones/allFunctions');
//const letras = "Hola Mundo";
test('longuitudDeString ', () => {
    const respuesta = longuitudDeString("Hola Mundo");
    expect(respuesta).toBe(10);
});
describe('Comparing result', () => {
    const respuesta = longuitudDeString("Hola Mundo");
    describe('Greater than or equal 10', () => {
        expect(respuesta).toBeGreaterThanOrEqual(10);
    });
    describe('Less than or equal 10', () => {
        expect(respuesta).toBeLessThanOrEqual(10);
    });
});
describe('Given a word Hola Mundo return the length', () =>{
    describe('Word length', ()=>{
        it('length', () => {
            const respuesta = longuitudDeString("Hola Mundo");
            expect(respuesta).toBe(10);
        });
    });
    describe('When word not exists', () => {
        it('Then throwan error', () => {
            const respuesta = longuitudDeString();
            expect(respuesta).toThrow()
        })
    })
});