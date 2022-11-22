import React from 'react';
import CarItem from '../components/CarItem/CarItem';

const CarsPage = () => {
  let carsList = [
    {
      brand: "BMW",
      model: "e60",
      engine: "disiel",
      basePrice: 5000,
      mileage: 300000,
      color: "Black",
      fotoUrl: "https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg",
    },
    {
      brand: "Honda",
      model: "Civic",
      engine: "petrol",
      basePrice: 1000,
      mileage: 400000,
      color: "Red",
      fotoUrl: "https://i.pinimg.com/736x/6e/e3/39/6ee339a1ebbd2d6c27cafb21f8d283a1--grill-lips.jpg",
    },
    {
      brand: "Mitsubishi",
      model: "Lancer EVO",
      engine: "petrol",
      basePrice: 10000,
      mileage: 250000,
      color: "White",
      fotoUrl: "https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg",
    },
  ];

  return (
    <div className='page-content'>
      <h2 className='page-title'>{carsList.length > 0 ? 'Cars:' : 'No cars :('}</h2>

      {carsList.length > 0 && (
        <div className='cars-list'>
          {carsList.map((car, index) => <CarItem key={index} data={car} />)}
        </div>
      )}
    </div>
  );
};

export default CarsPage;
