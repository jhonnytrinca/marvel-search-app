import { mount } from 'cypress/react';

import { DetailsModal } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { characters } from '../mocks/characters';
import { comic } from '../mocks/comics';

it('should render correctly and show info', () => {
  cy.intercept(
    {
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/comics/3627/*'
    },
    {
      statusCode: 200,
      body: characters
    }
  ).as('getCharacters');

  mount(<DetailsModal comic={comic} closeModal={() => {}} />);
  cy.wait('@getCharacters');
  cy.findAllByRole('img').should('have.length', 2);
  cy.findAllByText('Storm (2006)');
  cy.findByRole('link', { name: 'Clique aqui' });
  cy.findByText('31/12/2029');
  cy.findAllByText('Não disponível');
  cy.findByText('Eric Jerome Dickey');
  cy.findByText('David Hine');
  cy.findByText('Mike Mayhew');
});
