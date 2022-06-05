import {mount} from 'cypress/react'
import { useFormik } from 'formik'
import {Card} from '../../src/components'
import "../../node_modules/tailwindcss/tailwind.css"

const comic = {
  "id": 3627,
  "digitalId": 0,
  "title": "Storm (2006)",
  "issueNumber": 0,
  "variantDescription": "",
  "description": "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>",
  "modified": "2015-01-29T20:04:55-0500",
  "isbn": "",
  "upc": "",
  "diamondCode": "",
  "ean": "",
  "issn": "",
  "format": "Comic",
  "pageCount": 0,
  "textObjects": [
      {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>"
      }
  ],
  "resourceURI": "http://gateway.marvel.com/v1/public/comics/3627",
  "urls": [
      {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/3627/storm_2006?utm_campaign=apiRef&utm_source=284cb61831f90658ed8f8e656311488c"
      }
  ],
  "series": {
      "resourceURI": "http://gateway.marvel.com/v1/public/series/357",
      "name": "Storm (2006)"
  },
  "variants": [],
  "collections": [],
  "collectedIssues": [],
  "dates": [
      {
          "type": "onsaleDate",
          "date": "2029-12-31T00:00:00-0500"
      },
      {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
      }
  ],
  "prices": [
      {
          "type": "printPrice",
          "price": 0
      }
  ],
  "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7",
      "extension": "jpg"
  },
  "images": [
      {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7",
          "extension": "jpg"
      }
  ],
  "creators": {
      "available": 3,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/3627/creators",
      "items": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/370",
              "name": "Eric Jerome Dickey",
              "role": "writer"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/371",
              "name": "David Hine",
              "role": "penciller"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/243",
              "name": "Mike Mayhew",
              "role": "penciller (cover)"
          }
      ],
      "returned": 3
  },
  "characters": {
      "available": 1,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/3627/characters",
      "items": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629",
              "name": "Storm"
          }
      ],
      "returned": 1
  },
  "stories": {
      "available": 2,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/3627/stories",
      "items": [
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/496",
              "name": "Cover #496",
              "type": "cover"
          },
          {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/497",
              "name": "Interior #497",
              "type": "interiorStory"
          }
      ],
      "returned": 2
  },
  "events": {
      "available": 0,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/3627/events",
      "items": [],
      "returned": 0
  }
}

const Component = ({handleDetails, onChange}) => {
  const formik = useFormik({
    initialValues: {name: '', email: '', selectedOptions: []}
  })

  return(<Card comic={comic} handleDetails={handleDetails} onChange={onChange} formik={formik}/>)
}

it('should render correctly', () => {
  const handleDetails = cy.stub()
  const onChange = cy.stub()

  mount (<Component handleDetails={handleDetails} onChange={onChange}/>);
  cy.findByText('Storm (2006)');
  cy.findByRole('img');
  cy.findByText('Selecionar');
  cy.findByText('Detalhes');
  cy.findByRole('button').click().then(() => expect(handleDetails).to.calledOnce);
})