import { mount } from 'cypress/react';
import Home from '../../src/pages/Home';
import '../../node_modules/tailwindcss/tailwind.css';
import { characters } from '../mocks/characters';
import { comicList } from '../mocks/comics';

const Component = () => {
  cy.intercept(
    {
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/*'
    },
    {
      statusCode: 200,
      body: comicList
    }
  ).as('getComics');

  cy.intercept(
    {
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/comics/3627/*'
    },
    {
      statusCode: 200,
      body: characters
    }
  ).as('getCharacters');

  return <Home />;
};

it('should render list', () => {
  mount(<Component />);

  cy.wait('@getComics');
  cy.findAllByText('Marvel Previews (2017)').should('have.length', 2);
  cy.findByText('Storm (2006)');
  cy.findByText('Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)');
  cy.findByText('Storm (2006)');
  cy.findByText('X-Men: Days of Future Past (Trade Paperback)');
});

it('should open and close card details', () => {
  mount(<Component />);

  cy.get('[data-cy=comicDetails]').eq(2).click();

  cy.wait('@getCharacters');
  cy.findAllByText('Storm (2006)');
  cy.findByRole('link', { name: 'Clique aqui' });
  cy.findByText('31/12/2029');
  cy.findAllByText('Não disponível');
  cy.findByText('Eric Jerome Dickey');
  cy.findByText('David Hine');
  cy.findByText('Mike Mayhew');
  cy.get('[data-cy=closeModal]').click();
});

it('should select items and send data', () => {
  mount(<Component />);

  cy.get('[data-cy=checkbox]').eq(2).click();
  cy.get('[data-cy=checkbox]').eq(4).click();

  cy.get('[type=text]').eq(1).type('Teste');
  cy.findByDisplayValue('Teste');
  cy.get('[type=email]').type('teste@teste.com.br');
  cy.findByDisplayValue('teste@teste.com.br');
  cy.get('[data-cy=sendEmail]').click();
});
