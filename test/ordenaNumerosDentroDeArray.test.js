const { sort } = require('../funciones/allFunctions');
// [5, 1, 2, 3, 8, 20]
let array = [ 1, 2, 3, 5, 8, 20 ];
test('ordenaDatos ', () => {
    const resul = sort([5, 1, 2, 3, 8, 20]);
    expect(resul).toStrictEqual(array);
    expect(resul).toEqual(expect.anything());
});
describe('Given a array of numbers', () => {
    describe('When the array return the sort array', () => {
        it('Then we expect [1, 2, 3, 5, 8, 20] ', () => {
            const resul = sort([5, 1, 2, 3, 8, 20]);
            expect(resul).toStrictEqual(array);
        })
    })
    describe('When the array return something', () => {
        it('We only check if it returns something', () => {
            const resul = sort([5, 1, 2, 3, 8, 20]);
            expect(resul).toEqual(expect.anything());
        })
    })
})
