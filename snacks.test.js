const { getInitials } = require("./functions");

// snack 1 
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Angela Ferraro')).toContain('AF');
    expect(getInitials('Mario Rossi')).toContain('MR');
})