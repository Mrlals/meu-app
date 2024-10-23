import Relogio from "./Relogio";
import { Link } from "react-router-dom";

function Atv01() {
  return (
    <>
        <h2>Atividade 01</h2>
          <Relogio />

        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv01;
