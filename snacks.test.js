const { getInitials, createSlug, average, isPalindrome } = require("./functions");

// snack 1 
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Angela Ferraro')).toContain('AF');
    expect(getInitials('Mario Rossi')).toContain('MR');
});


// snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Boolean')).toBe('boolean');
    expect(createSlug('JAVASCRIPT')).toBe('javascript');
});


// snack 3 
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(average([10, 3, 62, 5])).toBe(20);
});


// snack 4 
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Questo è un test')).toBe('questo-è-un-test');
});

// snack 5 
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('osso')).toBeTruthy();
});


//snack 6
