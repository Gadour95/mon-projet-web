const addition = require('./test');

test('additionne 2 et 3 pour obtenir 5', () => {
    expect(addition(2, 3)).toBe(5);
});

test('additionne -1 et 1 pour obtenir 0', () => {
    expect(addition(-1, 1)).toBe(0);
});

test('additionne 0 et 0 pour obtenir 0', () => {
    expect(addition(0, 0)).toBe(0);
});