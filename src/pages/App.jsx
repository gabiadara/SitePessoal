// src/components/App.jsx
import Perfil from "../components/Perfil";
import CoteudoInicial from "../components/CoteudoInicial";
import Footer from "../components/Footer";
const App = () => {
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
export default App;