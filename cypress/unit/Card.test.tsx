import { mount } from 'cypress/react';
import { useFormik } from 'formik';
import { Card } from '../../src/components';
import '../../node_modules/tailwindcss/tailwind.css';
import { comic } from '../mocks/comics';

const Component = ({ handleDetails, onChange }) => {
  const formik = useFormik({
    initialValues: { name: '', email: '', selectedOptions: [] },
    onSubmit: () => {}
  });

  return (
    <Card
      comic={comic}
      handleDetails={handleDetails}
      onChange={onChange}
      formik={formik}
    />
  );
};

it('should render correctly and show info', () => {
  const handleDetails = cy.stub();
  const onChange = cy.stub();

  mount(<Component handleDetails={handleDetails} onChange={onChange} />);
  cy.findByText('Storm (2006)');
  cy.findByRole('img');
  cy.findByText('Selecionar');
  cy.findByText('Detalhes');
  cy.findByRole('button')
    .click()
    .then(() => expect(handleDetails).to.calledOnce);
});
