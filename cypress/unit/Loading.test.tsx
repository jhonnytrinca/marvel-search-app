import { mount } from 'cypress/react';
import { Loading } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';

it('should render correctly', () => {
  mount(<Loading />);
  cy.findByRole('img');
  cy.findByText('Carregando...');
});
