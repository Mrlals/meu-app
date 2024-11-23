import React, { useState } from "react";

const artworks = [
  {
    title: "Homenaje a la Neurocirugía",
    artist: "Marta Colvin Andrade",
    image: "https://en.wikipedia.org/wiki/File:Homenaje_a_la_Neurocirug%C3%ADa,_Instituto_de_Neurocirug%C3%ADa,_Providencia,_Santiago_20200106_02.jpg",
  },

];

function Gallery_5() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextArtwork = () => {
    setIndex((index + 1) % artworks.length);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const artwork = artworks[index];

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={nextArtwork}>Next</button>
      <h2>
        {artwork.title} by {artwork.artist}
      </h2>
      <p>{index + 1} of {artworks.length}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && <img src={artwork.image} alt={artwork.title} />}
    </div>
  );
}

export default Gallery_5;
