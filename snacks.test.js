const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./functions");


describe('Manipolazione di stringhe', () => {
    // snack 1 
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials('Angela Ferraro')).toBe('AF');
        expect(getInitials('Mario Rossi')).toBe('MR');
    });

    // snack 5 
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome('osso')).toBeTruthy();
        expect(isPalindrome('angela')).toBeFalsy();
    });
});

describe('Operazioni su array', () => {

    // snack 3 
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
        expect(average([10, 3, 62, 5])).toBe(20);
        expect(() => average([10, 'cane'])).toThrow();
    });

    let posts;

    beforeEach(() => posts = [
        {
            id: 1,
            title: "Introduzione a JavaScript",
            slug: "introduzione-a-javascript"
        },
        {
            id: 2,
            title: "Come usare React",
            slug: "come-usare-react"
        },
        {
            id: 3,
            title: "Guida a Node.js",
            slug: "guida-a-node-js"
        },
        {
            id: 4,
            title: "CSS Flexbox in pratica",
            slug: "css-flexbox-in-pratica"
        }
    ]);

    afterEach(() => posts = []);

    // snack 7
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 2)).toEqual({
            id: 2,
            title: "Come usare React",
            slug: "come-usare-react"
        });
        expect(() => findPostById(posts, 'gatto')).toThrow("'gatto' non è un id.");
        expect(() => findPostById([4, 25, 55], 2)).toThrow("L'array non è nel formato corretto!");
        expect(findPostById(posts, 6)).toBe(null);

    });

    // snack 8 bonus 
    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
        addPost(posts, { id: 5, title: 'Come colorare un titolo', slug: 'come-colorare-un-titolo' });
        expect(posts).toHaveLength(5);
    });

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        removePost(posts, 4);
        expect(posts).toHaveLength(3);
    });

});

describe('Operazioni di slug', () => {

    // snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug('Boolean')).toBe('boolean');
        expect(createSlug('JAVASCRIPT')).toBe('javascript');
    });

    // snack 4 
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug('Questo è un test')).toBe('questo-è-un-test');
    });

    //snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug('')).toThrow(); //devo passare la funzione ad expect che avrà il valore della funzione createSlug, in questo caso vuoto, se non faccio così l'errore verrebbe generato prima che Jest possa intercettarlo.
    });

});




