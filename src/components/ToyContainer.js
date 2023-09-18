import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, onDelete} ) {
  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard key={toy.id} toy={toy} onDelete={onDelete}/>)}
    </div>
  );
}

export default ToyContainer;
