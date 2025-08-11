// function snack 1
function getInitials(nomeCompleto) {
    const splittedName = nomeCompleto.split(' ');
    const initials = splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase();

    return initials;
}

// function snack 2
function createSlug(str) {
    return str.toLowerCase();
}

module.exports = {
    getInitials,
    createSlug
}