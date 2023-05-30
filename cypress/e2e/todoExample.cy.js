/* eslint-disable prettier/prettier */
describe('TodoMVC', () => {
    beforeEach(() => {
      cy.visit('http://todomvc.com/examples/vanillajs/');
    });
  
    it('primeiro teste', () => {
      cy.get('.new-todo').type('Lavar louça{enter}')
    });

    it('Adicionar tarefa', () => {
      cy.get('.new-todo').type('Minha nova tarefa{enter}');
      cy.contains('Minha nova tarefa').should('be.visible');
    });

    it('Excluir tarefa', () => {
        cy.get('.new-todo').type('Minha nova tarefa{enter}');
        cy.contains('Minha nova tarefa').parent().find('.destroy').click({force: true})
        cy.contains('Minha nova tarefa').should('not.exist')
    });

    it('Completar uma tarefa', () => {
        cy.get('.new-todo').type('Minha nova tarefa{enter}');

        cy.contains('Minha nova tarefa').parent().find('[type="checkbox"]').click({force: true})
    });

    it('Filtrar por Active', () => {
        cy.get('.new-todo').type('Minha nova tarefa{enter}');      
    });
  });



  