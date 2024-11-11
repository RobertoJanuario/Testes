// formValidation.js
function validateForm(nome, raca, porte, especie, idade, genero) {
    const errors = {};

    if (!nome) errors.nome = 'Nome é obrigatório.';
    if (!raca) errors.raca = 'Raça é obrigatória.';
    if (!especie) errors.especie = 'Espécie é obrigatória.';
    if (!porte) errors.porte = 'Porte é obrigatório.';
    
    // Converta idade para número e valide
    const idadeNumero = Number(idade);
    if (!idade || isNaN(idadeNumero) || idadeNumero <= 0) {
        errors.idade = 'Idade deve ser um número positivo.';
    }

    if (!genero) errors.genero = 'Gênero é obrigatório.';

    return errors;
}
module.exports = validateForm;
