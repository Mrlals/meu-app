import React from "react";
import Toolbar from "./components/Toolbar";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import Form from "./components/Form";
import { Link } from "react-router-dom";

function Atv05() {
  return (
    <>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Atividade 05</h2>
        <Toolbar />
        <Gallery />
        <Counter />
        <Form />
        </div>
        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv05;