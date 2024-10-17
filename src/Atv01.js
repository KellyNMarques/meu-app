import { Link } from "react-router-dom";
import Relogio from "./Relogio"
import Letreiro from "./Letreiro"

function Atv01() {
    return (
      <>
        <div>
          <h1>Atividade 01</h1>
          <Letreiro />
          <Relogio />
        <Link to="/">Voltar</Link>
        </div>
      </>
    );
  }
  
  export default Atv01;