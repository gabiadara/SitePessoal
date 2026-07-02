// src/pages/Sobre.jsx
import Perfil from "../components/Perfil/Perfil";
import Footer from "../components/Footer";
import ConteudoCurriculo from "../components/ConteudoCurriculo/ConteudoCurriculo";
const Sobre = () => {
    return (
        <div className="container">
            <div className="row">
                <Perfil col={3} />
                <ConteudoCurriculo col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default Sobre;