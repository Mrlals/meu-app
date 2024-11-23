import React from "react";

function Toolbar() {
  const handlePlayMovie = () => {
    alert("Playing the movie!");
  };

  const handleUploadImage = () => {
    alert("Uploading the image!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px",
      }}
    >
      <button onClick={handlePlayMovie}>Play Movie</button>
      <button onClick={handleUploadImage}>Upload Image</button>
    </div>
  );
}

export default Toolbar;
