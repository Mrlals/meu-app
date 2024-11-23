import Contador from "./Contador";
import { Link } from "react-router-dom";

function Atv03() {
    return (
      <>
          <h2>Atividade 03</h2>
          <Contador />

          <Link to="/">Voltar</Link>
      </>
    );
  }
  
  export default Atv03;