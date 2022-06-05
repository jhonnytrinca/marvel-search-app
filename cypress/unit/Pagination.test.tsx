import { mount } from 'cypress/react';
import { Pagination } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { useState } from 'react';

const Component = () => {
  const [page, setPage] = useState(0);

  return <Pagination count={1000} page={page} perPage={10} setPage={setPage} />;
};

it('should render correctly', () => {
  mount(<Component />);
  cy.findAllByRole('button').should('have.length', 2);
  cy.get('[data-cy=buttonPrevPage]').should('be.disabled');
  cy.get('[data-cy=buttonNextPage]').should('not.be.disabled');
  cy.get('[data-cy=buttonNextPage]').click();
  cy.get('[data-cy=buttonPrevPage]').should('not.be.disabled');
});
