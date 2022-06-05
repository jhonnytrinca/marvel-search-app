import { mount } from 'cypress/react';
import { Toggle } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';

it('should render correctly', () => {
  const onChange = cy.stub();
  mount(<Toggle onChange={onChange} />);
  cy.findByRole('checkbox')
    .click()
    .then(() => expect(onChange).to.calledOnce);
});
