const validateForm = require('./formValidation');


describe('Validação do Formulário de Cadastro de Pet', () => {
    test('Deve retornar erro se o nome estiver vazio', () => {
        const errors = validateForm('', 'Poodle', 'Pequeno', 'Cachorro', '5', 'Macho');
        expect(errors.nome).toBe('Nome é obrigatório.');
    });

    test('Deve retornar erro se a raça estiver vazia', () => {
        const errors = validateForm('Buddy', '', 'Pequeno', 'Cachorro', '5', 'Macho');
        expect(errors.raca).toBe('Raça é obrigatória.');
    });

    test('Deve retornar erro se a espécie estiver vazia', () => {
        const errors = validateForm('Buddy', 'Poodle', 'Pequeno', '', '5', 'Macho');
        expect(errors.especie).toBe('Espécie é obrigatória.');
    });

    test('Deve retornar erro se o porte estiver vazio', () => {
        const errors = validateForm('Buddy', 'Poodle', '', 'Cachorro', '5', 'Macho');
        expect(errors.porte).toBe('Porte é obrigatório.');
    });

    test('Deve retornar erro se a idade for inválida ou vazia', () => {
        let errors = validateForm('Buddy', 'Poodle', 'Pequeno', 'Cachorro', '', 'Macho');
        expect(errors.idade).toBe('Idade deve ser um número positivo.');

        errors = validateForm('Buddy', 'Poodle', 'Pequeno', 'Cachorro', '-1', 'Macho');
        expect(errors.idade).toBe('Idade deve ser um número positivo.');
    });

    test('Deve retornar erro se o gênero estiver vazio', () => {
        const errors = validateForm('Buddy', 'Poodle', 'Pequeno', 'Cachorro', '5', '');
        expect(errors.genero).toBe('Gênero é obrigatório.');
    });

    test('Deve passar se todos os campos forem válidos', () => {
        const errors = validateForm('Buddy', 'Poodle', 'Pequeno', 'Cachorro', '5', 'Macho');
        expect(errors).toEqual({});
    });
});

