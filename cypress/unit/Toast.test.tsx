import { mount } from 'cypress/react';
import { Toast } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import toast from 'react-hot-toast';

it('should render toast with info', () => {
  mount(<Toast />);
  toast.success('Toast de sucesso exibido!');
  cy.findByText('Toast de sucesso exibido!');

  toast.error('Toast de erro exibido!');
  cy.findByText('Toast de erro exibido!');
});
