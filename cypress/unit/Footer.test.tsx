import { mount } from 'cypress/react';
import { Footer } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { useFormik } from 'formik';

const Component = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', selectedOptions: [] },
    onSubmit: () => {}
  });

  return <Footer formik={formik} />;
};

it('should render correctly', () => {
  mount(<Component />);
  cy.get('[type=text]').type('Teste');
  cy.findByDisplayValue('Teste');
  cy.get('[type=email]').type('teste@teste.com.br');
  cy.findByDisplayValue('teste@teste.com.br');
  cy.findByRole('button').click();
});
