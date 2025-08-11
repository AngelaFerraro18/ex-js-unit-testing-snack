// function snack 1
function getInitials(nomeCompleto) {
    // const splittedName = nomeCompleto.split(' ');
    // const initials = splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase();

    // return initials;

    const [nome, cognome] = nomeCompleto.split(' ').filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

// function snack 2 - 4 -6
function createSlug(str) {

    if (!str) {
        throw new Error('Il titolo è vuoto o non valido!');
    }

    return str.toLowerCase().replaceAll(' ', '-');
}

// function snack 3 
function average(arr) {

    arr.forEach(num => {
        if (isNaN(num)) {
            throw new Error('Average vuole solo numeri!');
        }
    });

    const somma = arr.reduce((acc, curr) => acc + curr, 0);
    return somma / arr.length;
}

//function snack 5
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// function snack 7 
function findPostById(arr, id) {

    if (isNaN(id)) {
        throw new Error(`'${id}' non è un id.`)
    };

    arr.forEach(p => {
        if (p.id === undefined || p.title === undefined || p.slug === undefined) {
            throw new Error("L'array non è nel formato corretto!")
        }
    });

    return arr.find(e => e.id === id) || null;
}


// functions snack 8
function addPost(arr, post) {
    arr.push(post);
}

function removePost(arr, id) {
    const index = arr.findIndex(p => p.id === id);
    arr.splice(index, 1);
}



module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost
}