import Toolbar from "./Toolbar";
import Gallery_5 from "./Gallery_5";
import Counter from "./Counter";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import MovingDot from "./MovingDot";
import List from "./List";
import List2 from "./List2";
import List3 from "./List3";
import CounterList from "./CounterList";
import ShapeEditor from "./ShapeEditor";
import { Link } from "react-router-dom";

function Atv04() {
  return (
    <>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Atividade 04</h2>
        <Toolbar />
        <Gallery_5 />
        <Counter />
        <Form />
        <MovingDot/>
        <Form2/>
        <Form3/>
        <List/>
        <List2/>
        <ShapeEditor/>
        <CounterList/>
        <List3/>
        </div>
        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv04;