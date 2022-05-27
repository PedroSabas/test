const { numerosPares } = require('../funciones/allFunctions');
test('numerosPares SI o NO', () => {
    const respuesta = numerosPares(18);
    expect(respuesta).toBe("SI");
});
describe('Given a number 18', () => {
    describe('When the number is Par', () => {
        it('Then SI', ()=> {
            const respuesta = numerosPares(18);
            expect(respuesta).toBe("SI");
            expect(respuesta).not.toMatch("NO");
        });
    });
    describe('When the number is Impar', () => {
        it('Then NO', ()=> {
            // Si paso un impar retorna un correct
            const respuesta = numerosPares(17);
            expect(respuesta).toBe("NO");
            expect(respuesta).not.toMatch("SI");
        });
    });
});