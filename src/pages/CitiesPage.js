import React from 'react'
import CityItem from '../components/CityItem/CityItem';

const CitiesPage = () => {
  let data = [
    {
      name: 'London',
      population: 11120000,
      location: {
        continent: 'Europe',
        country: 'United Kingdom',
      },
      touristAttractions: ['Big Ben'],
      isCapital: true
    },
    {
      name: 'Paris',
      population: 11027000,
      location: {
        continent: 'Europe',
        country: 'France',
      },
      touristAttractions: [],
      isCapital: true
    },
    {
      name: 'New York',
      population: 19294000,
      location: {
        continent: 'North America',
        country: 'United States of America',
      },
      touristAttractions: ['Metropolitan Museum', 'Central Park', 'Modern Art Museum'],
      isCapital: false
    },
    {
      name: 'Moscow',
      population: 17693000,
      location: {
        continent: 'Europe and Asia',
        country: 'Russia',
      },
      touristAttractions: [`St. Basil's Cathedral`, 'Moscow Kremlin', 'Red Square'],
      isCapital: true
    },
    {
      name: 'Dubai',
      population: 6595000,
      location: {
        continent: 'Asia',
        country: 'United Arab Emirates',
      },
      touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall'],
      isCapital: false
    },
    {
      name: 'Tokyo',
      population: 39105000,
      location: {
        continent: 'Asia',
        country: 'Japan',
      },
      touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu'],
      isCapital: true
    },
    {
      name: 'Singapore',
      population: 5901000,
      location: {
        continent: 'Asia',
        country: 'Singapore',
      },
      touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa'],
      isCapital: true
    },
    {
      name: 'Los Angeles',
      population: 13250000,
      location: {
        continent: 'North America',
        country: 'United States of America',
      },
      touristAttractions: ['Museum of Art', 'Disneyland Park', 'Santa Monica Pie'],
      isCapital: false
    },
    {
      name: 'Barcelona',
      population: 4735000,
      location: {
        continent: 'Europe',
        country: 'Spain',
      },
      touristAttractions: ['La Sagrada Familia', 'Park Guell', 'Casa Batllo', 'Test'],
      isCapital: false
    },
    {
      name: 'Rio de Janeiro',
      population: 6748000,
      location: {
        continent: 'South America',
        country: 'Brazil',
      },
      touristAttractions: ['Christ the Redeemer', 'Sugaloaf Mountain', 'Copacabana Beach', 'test', 'test', 'test'],
      isCapital: false
    },
  ];

  let pageTitle = data.length > 0 ? 'Cities' : 'No data';

  return (
    <div className='page-content'>
      <h2 className='page-title'>{pageTitle}</h2>

      {data.length > 0 && (
        <div className='cities-list'>
          {data.map((city, index) => <CityItem key={index} data={city} />)}
        </div>
      )}

    </div>
  )
}

export default CitiesPage