// src/components/App.jsx
import Perfil from "../components/Perfil/Perfil";
import CoteudoInicial from "../components/ConteudoInicial/ConteudoInicial";
import Footer from "../components/Footer";
import '../App.css';

const App = () => {
    return (
        <div className="container app">
            <div className="row">
                <Perfil col={3} />
                <CoteudoInicial col={8} />
            </div>
            <Footer />
        </div>
    );
};
export default App;