// src/components/App.jsx
import { Link } from "react-router-dom";
import Perfil from "../components/Perfil";
import CoteudoInicial from "../components/CoteudoInicial";
const App = () => {
    return (
        <>
            {/* divExterna */}
            <div className="row">
                <Perfil />
                <CoteudoInicial />
            </div>
            {/* divFooter */}
            <div>
                divFoter
            </div>
        </>
    );
};
export default App;





{/* <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <h1>Página inicial</h1> */}