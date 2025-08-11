const { getInitials, createSlug } = require("./functions");

// snack 1 
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Angela Ferraro')).toContain('AF');
    expect(getInitials('Mario Rossi')).toContain('MR');
});


// snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Boolean')).toBe('boolean');
    expect(createSlug('JAVASCRIPT')).toBe('javascript');
})
