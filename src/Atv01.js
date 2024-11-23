import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

function Atv01() {
  return (
    <>
        <h2>Atividade 01</h2>
          <Relogio />
          <Letreiro />

        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv01;
