import { mount } from 'cypress/react';
import { Input } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { useState } from 'react';

const Component = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder='Informe'
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

it('should rend correctly', () => {
  mount(<Component />);
  cy.findByRole('textbox').type('Teste');
  cy.findByDisplayValue('Teste');
});
