import React, { useState } from "react";
import { Fade, Rotate } from "react-reveal"; // react-reveal allows to utilize the animations in the react elemnts
// method to install the react-reveal => npm install react-reveal --forced

function AddPlant(props) {
  const [plantItems, setPlants] = useState("");

  const HandleSubmitPlant = (e) => {
    e.preventDefault();
    console.log(plantItems);
    console.log(props.category == "newCat" ? "This is newCat" : "otherCat");
    setPlants('');
  };

  return (
    <form onSubmit={HandleSubmitPlant}>
      <label>{props.category}</label>
      <input type="text" onChange={(e) => setPlants(e.target.value)} />
      <input type="submit" value="Submit" />
      <p>{plantItems}</p>
    </form>
  );
}

function UnorderedList() {
  const plants = [
    { id: 1, name: "rose" },
    { id: 2, name: "apple" },
  ];
  return (
    <div>
      <ul>
        {plants.map((plant) => (
          <Fade>
            <li key={plant.id}>{plant.name}</li>
          </Fade>
        ))}
      </ul>
      <AddPlant category="Hedge" />
      <AddPlant category="newCat" />
    </div>
  );
}

export default UnorderedList;
