import React, { useState } from "react";

// Array com 12 imagens
const artworks = [
  { title: "Homenaje a la Neurocirugía", artist: "Marta Colvin Andrade", image: "/mc.jpg" },
  { title: "Starry Night", artist: "Vincent van Gogh", image: "/sn.jpg" },
  { title: "The Persistence of Memory", artist: "Salvador Dalí", image: "/pm.jpg" },
  { title: "The Scream", artist: "Edvard Munch", image: "/sc.jpg" },
  { title: "The Kiss", artist: "Gustav Klimt", image: "/ki.jpg" },
  { title: "Guernica", artist: "Pablo Picasso", image: "/gu.jpg" },
  { title: "The Last Supper", artist: "Leonardo da Vinci", image: "/ls.jpg" },
  { title: "Girl with a Pearl Earring", artist: "Johannes Vermeer", image: "/gp.jpg" },
  { title: "American Gothic", artist: "Grant Wood", image: "/ag.jpg" },
  { title: "The Birth of Venus", artist: "Sandro Botticelli", image: "/bv.jpg" },
  { title: "Mona Lisa", artist: "Leonardo da Vinci", image: "/ml.jpg" },
  { title: "The Great Wave off Kanagawa", artist: "Hokusai", image: "/gk.jpg" },
];

function Gallery_5() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Função para ir para o próximo item
  const nextArtwork = () => {
    setIndex((index + 1) % artworks.length);
  };

  // Alternar detalhes
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Obter obra de arte atual
  const artwork = artworks[index];

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <button onClick={nextArtwork}>Next</button>
      <h2>
        {artwork.title} by {artwork.artist}
      </h2>
      <p>
        {index + 1} of {artworks.length}
      </p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div style={{ marginTop: "20px" }}>
          <img src={artwork.image} alt={artwork.title} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
    </div>
  );
}

export default Gallery_5;
