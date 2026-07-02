import React from 'react'
import minhaFoto from './minha_foto.jpeg'

import './Perfil.css'

const Perfil = ({ col }) => {
    return (
        <div id='perfil' className={`col-12 col-md-${col}`}>
            <img className='mb-3' src={minhaFoto} alt="Foto de Gabriela" />
            <p className="mb-3">Gabriela Adara Amarante</p>
            <fieldset disabled>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-envelope-heart"></i>
                    </span>
                    <a href='mailto:gabi.adaraa@gmail.com' className="form-control text-truncate text-decoration-none" >gabi.adaraa@gmail.com</a>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-pin-map"></i>
                    </span>
                    <a href="" className="form-control text-truncate text-decoration-none">Blumenau/SC - Brasil</a>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-github"></i>
                    </span>
                    <a className="form-control text-truncate text-decoration-none" href="https://github.com/gabiadara">Github</a>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-linkedin"></i>
                    </span>
                    <a className="form-control text-truncate text-decoration-none" href="https://www.linkedin.com/in/gabriela-adara-amarante-b831452a3/">Linkedin</a>
                </div>
            </fieldset>
        </div>
    )
}

export default Perfil
