// calcul.test.js
const { addition, soustraction } = require('./calcul');

describe('Tests de la fonction addition', () => {
    test('Ajoute 1 et 2 pour obtenir 3', () => {
        expect(addition(1, 2)).toBe(3);
    });

    test('Ajoute -1 et 1 pour obtenir 0', () => {
        expect(addition(-1, 1)).toBe(0);
    });
});

describe('Tests de la fonction soustraction', () => {
    test('Soustrait 2 de 5 pour obtenir 3', () => {
        expect(soustraction(5, 2)).toBe(3);
    });

    test('Soustrait 3 de 3 pour obtenir 0', () => {
        expect(soustraction(3, 3)).toBe(0);
    });
});