import React from "react";

function PlaceTree({ id, placesById, onComplete, parentId }) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}{" "}
      <button
        onClick={() => onComplete(parentId, id)}
        className="cursor-pointer border border-black"
      >
        complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default PlaceTree;
