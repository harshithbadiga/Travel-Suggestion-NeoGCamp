import { useState } from "react";
import "./styles.css";

const travelLoc = {
  BeachSide: [
    {
      name: "Goa",
      info: "Great place with portugese architecure & beaches",
      rating: "⭐️⭐️⭐️⭐️"
    },
    {
      name: "Hawai",
      info: "Great place with latin architecure & beaches",
      rating: "⭐️⭐️⭐️"
    },
    {
      name: "Peru",
      info: "Great place with american architecure & beaches",
      rating: "⭐️⭐️"
    }
  ],
  HillStations: [
    {
      name: "Ladakh",
      info: "Great place with portugese architecure & beaches",
      rating: "⭐️⭐️⭐️⭐️"
    },
    {
      name: "Himachal",
      info: "Great place with latin architecure & beaches",
      rating: "⭐️⭐️⭐️"
    },
    {
      name: "Jammu",
      info: "Great place with american architecure & beaches",
      rating: "⭐️⭐️"
    }
  ],
  CountrySide: [
    {
      name: "Mahabaleshwar",
      info: "Great place with portugese architecure & beaches",
      rating: "⭐️⭐️⭐️⭐️"
    },
    {
      name: "Hampi",
      info: "Great place with latin architecure & beaches",
      rating: "⭐️⭐️⭐️"
    },
    {
      name: "Udupi",
      info: "Great place with american architecure & beaches",
      rating: "⭐️⭐️"
    }
  ]
};

const travelInfo = Object.keys(travelLoc);

export default function App() {
  const [showLOc, setShowLoc] = useState("CountrySide");
  function clickHandler(loc) {
    setShowLoc(loc);
  }
  return (
    <div className="App">
      <h1>Travel Suggestions</h1>
      <h2>Click on the type to find out the loactions!</h2>
      <div>
        {travelInfo.map((type) => (
          <button
            style={{
              margin: " 1rem 2rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              backgroundColor: "gray",
              color: "white"
            }}
            onClick={() => clickHandler(type)}
          >
            {" "}
            {type}{" "}
          </button>
        ))}
      </div>
      <hr />
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {travelLoc[showLOc].map((location) => (
          <li
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }}
          >
            <h1> {location.name} </h1>
            <p> {location.info} </p>
            <h6> {location.rating} </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
