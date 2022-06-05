import { mount } from 'cypress/react';

import { EmailTemplate } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { comic } from '../mocks/comics';

const values = {
  name: 'Teste',
  email: 'teste@teste.com.br',
  selectedOptions: [comic]
};

it('should render correctly and show info', () => {
  mount(<EmailTemplate values={values} />);
  cy.findByRole('img');
  cy.findAllByText('Storm (2006)');
  cy.findByRole('link', { name: 'Clique aqui' });
  cy.findByText('31/12/2029');
  cy.findAllByText('Não disponível');
  cy.findByText('Eric Jerome Dickey');
  cy.findByText('David Hine');
  cy.findByText('Mike Mayhew');
});
