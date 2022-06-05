import {mount} from 'cypress/react'
import {Checkbox} from '../../src/components'
import "../../node_modules/tailwindcss/tailwind.css"

it('should render correctly', () => {
  mount (
    <>
      <Checkbox label={['Selecionar', 'Selecionado']} onChange={() => {}}/>
      <Checkbox label={['Selecionar', 'Selecionado']} onChange={() => {}}/>
      <Checkbox label={['Selecionar', 'Selecionado']} onChange={() => {}}/>
    </>
  );

  cy.get("[type=checkbox]").should('have.length', 3);
  cy.get("[data-cy=checkbox]").eq(0).click();
  cy.get("[type=checkbox]").eq(0).should('be.checked');
  cy.get("[data-cy=checkbox]").eq(1).click();
  cy.get("[type=checkbox]").eq(1).should('be.checked');
  cy.get("[data-cy=checkbox]").eq(2).click();
  cy.get("[type=checkbox]").eq(2).should('be.checked');
  cy.get("[data-cy=checkbox]").eq(0).click();
  cy.get("[type=checkbox]").eq(0).should('not.be.checked');
})