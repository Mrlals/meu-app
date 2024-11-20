import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import { Link } from "react-router-dom";

function Atv05() {
  return (
    <>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Atividade 05</h2>
        <Toolbar />
        <Gallery_5 />
        <Counter />
        <Form />
        </div>
        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv05;