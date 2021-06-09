import React from "react";
import {Tile} from '../tile/Tile.js'

export const TileList = (props) => {
  return (
    <div>
      {props.infos.map((info, index)=>(<Tile key={index} info={info} />))}
    </div>
  );
};
