import React, { useState } from "react";
import { initialTravelPlan } from "../data/Places.js";
import PlaceTree from "./PlaceTree.jsx";

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];
  const planetsIds = root.childIds;
  return (
    <>
      <h1>Places to vist </h1>
      <ol>
        {planetsIds.map((placeId) => (
          <PlaceTree key={placeId} id={placeId} placesById={plan} />
        ))}
      </ol>
    </>
  );
}

export default TravelPlan;
