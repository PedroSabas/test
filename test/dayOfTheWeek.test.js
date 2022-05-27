const { dayOfTheWeek } = require('../funciones/allFunctions');
// "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"
const array = [
    "domingo", 
    "lunes", 
    "martes",
    "miercoles", 
    "jueves", 
    "viernes",
    "sabado"
    ];
test('dayOfTheWeek pass one number', () => {
    const result = dayOfTheWeek(2);
    expect(result).toBe("domingo"); 
});
describe('Avoid the null values', ()=> {
    const result = dayOfTheWeek(2);
    expect(result).toBeNull();
    expect(result).not.toBeUndefined();
});
test('Match in any value of the array', () => {
    const result = dayOfTheWeek(2);
    expect(new Set(array)).toContain(result); 
});