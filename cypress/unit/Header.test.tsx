import { mount } from 'cypress/react';
import { Header } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';

it('should render correctly', () => {
  mount(<Header />);
  cy.findByRole('img', { name: 'Logo da Marvel' });
  cy.findByRole('checkbox').click();
  cy.findByRole('img', { name: 'Logo da Marvel - Dark Mode' });
});
