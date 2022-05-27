const { hr } = require('../funciones/allFunctions');

test('We expect anything', () => {
    const resul = hr();
    // Validamos que traiga algo culaquier cosa menos un nulo o un undefined
    expect(resul).toEqual(expect.anything());
});

test('Not null result', () => {
    const resul = hr();
    if ( null === resul ) {
        expect(resul).not.toBeNull();
    }
});