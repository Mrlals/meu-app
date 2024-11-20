import React from "react";

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px" }}>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  );
}

export default Toolbar;
