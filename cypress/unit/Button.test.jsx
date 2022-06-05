import {mount} from 'cypress/react'
import {Button} from '../../src/components'
import "../../node_modules/tailwindcss/tailwind.css"

it('should render correctly', () => {
  mount (<Button>Clique aqui</Button>);
  cy.findByRole('button').click();
})