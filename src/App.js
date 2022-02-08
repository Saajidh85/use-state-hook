import React, { useState } from "react";
import "./App.css";
import UnorderedList from "./Components/UnorderedList";

function Car({ car }) {
  return (
    <div className="car-item">
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.milage}</p>
    </div>
  );
}

function AddCar() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [milage, setMilage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const carObj = { brand, model, year, milage };
    console.log(carObj);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <label>Brand</label>
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="Toyota">Toyota</option>
        <option value="Nissan">Nissan</option>
        <option value="Mazda">Mazda</option>
      </select>
      <label>Model</label>
      <input
        type="text"
        required
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <label>Year</label>
      <input
        type="text"
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>Milage</label>
      <input
        type="text"
        required
        value={milage}
        onChange={(e) => setMilage(e.target.value)}
      />
      <button>Add Car</button>
      <p>
        {brand} {model} {year} {milage}
      </p>
    </form>
  );
}

function App() {
  const cars = [
    { id: 1, brand: "Toyota", model: "Kluger", year: 2021, milage: 25000 },
    { id: 2, brand: "Nissan", model: "Pulsar", year: 2011, milage: 250002 },
    { id: 3, brand: "Mazda", model: "x3", year: 2021, milage: 25000 },
    { id: 4, brand: "Nissan", model: "Pulsar", year: 2001, milage: 250002 },
  ];

  return (
    <div>
      <AddCar />
      <UnorderedList />
      <div className="cars">
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
      <div></div>

      <>
        
      </>
    </div>
  );
}

export default App;
