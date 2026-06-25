// src/pages/Sobre.jsx
import Perfil from "../components/Perfil";
import CoteudoInicial from "../components/CoteudoInicial";
import Footer from "../components/Footer";
const Sobre = () => {
    return (
        <div className="container">
            <div className="row">
                <Perfil col={4} />
                <CoteudoInicial col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default Sobre;