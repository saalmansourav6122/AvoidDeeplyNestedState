import React, { useState } from "react";
import { initialTravelPlan } from "../data/Places.js";
import PlaceTree from "./PlaceTree.jsx";

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];
  const planetsIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };
  return (
    <>
      <h1>Places to vist </h1>
      <ol type="1">
        {planetsIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}

export default TravelPlan;
