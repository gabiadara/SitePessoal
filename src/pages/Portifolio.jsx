import Perfil from "../components/Perfil/Perfil";
import Footer from "../components/Footer";
import ConteudoPortifolio from "../components/ConteudoPortifolio/ConteudoPortifolio";

const Portifolio = () => {
    return (
        <div className="container">
            <div className="row">
                <Perfil col={3} />
                <ConteudoPortifolio col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default Portifolio;
