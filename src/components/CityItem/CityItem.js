import React from 'react'

const CityItem = (props) => {
  let { isCapital, location, name, population, touristAttractions } = props.data;
  let classes = isCapital ? ' capital' : '';
  let capitalText = isCapital && ' (capital)';
  let capitalDescription = isCapital ? ` ${name} is the capital of ${location.country}.` : '';
  let cityDescription = `${name} city is located in ${location.continent}, ${location.country} and has population of ${population} people.${capitalDescription}`;

  function renderTouristAttractions() {
    if (touristAttractions.length === 0) {
      return;
    }

    let title = touristAttractions.length === 1 ? 'Main tourist attraction is:' : 'Main tourist attractions are:'
    let list = touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>);

    return (
      <>
        <h3>{title}</h3>
        <ul>{list}</ul>
      </>
    )
  }

  return (
    <div className={`city-item${classes}`}>
      <h2 className='city-name'>{name}{capitalText}</h2>
      <p>{cityDescription}</p>
      {renderTouristAttractions()}

      {/* {touristAttractions.length > 0 && (
        <>
          <h3>{touristAttractions.length === 1 ? 'Main tourist attraction is:' : 'Main tourist attractions are:'}</h3>
          <ul>
            {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
          </ul>
        </>
      )} */}
    </div>
  )
}

export default CityItem