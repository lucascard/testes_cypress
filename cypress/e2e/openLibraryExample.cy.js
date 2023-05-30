/* eslint-disable prettier/prettier */
describe('Log in', () => {
    beforeEach(() => {
        cy.visit('https://openlibrary.org/')

        cy.contains('Log In').click()

        cy.url().should('include', 'account/login')
    });

    it('Entrar em Crie uma conta agora', () => {
        cy.contains('Crie uma conta agora').click()

        cy.url().should('include', '/account/create')
    });

    it('Email obrigatório', () => {

        cy.get('.login-submit').click()
        
        cy.contains('The email address you entered is invalid')
            .should('be.visible')
    });

    it.skip('Email inválido', () => {
        cy.get('#username').type('lucas')

        cy.get('.login-submit').click()
        
        cy.contains('Inclua um "@" no endereço de e-mail. "lucas" está com um "@" faltando.')
            .should('be.visible');
    });

    it('Conta inexistente', () => {
        // utilizando um email o mais fake possivel
        cy.get('#username').type('lucas@gmail.com')

        cy.get('.login-submit').click()

        cy.contains('No account was found with this email. Please try again')
            .should('be.visible')
    });

    it('Senha incorreta', () => {
        cy.get('#username').type('cardosolucasrodrigues@gmail.com')

        cy.get('.login-submit').click()

        cy.contains('Wrong password. Please try again')
            .should('be.visible')
    });
});

describe('Registre-se', () => {
    beforeEach(() => {
        cy.visit('https://openlibrary.org/')

        cy.contains('Sign Up').click()

        cy.url().should('include', '/account/create')
    });

    it('Alert - Preencha todos os campos!', () => {
        cy.get('#username')

        cy.get('#signup').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Please complete all fields and click the reCAPTCHA checkbox before proceeding.');

        })
    });
});