import React from "react";

export const Tile = ({ info }) => {
  return (
    <div className="tile-container">
      {Object.values(info).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
