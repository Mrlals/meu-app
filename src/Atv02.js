import Contador from "./Contador";
import { Link } from "react-router-dom";

function Atv02() {
    return (
      <>
          <h2>Atividade 02</h2>
          <Contador />

          <Link to="/">Voltar</Link>
      </>
    );
  }
  
  export default Atv02;