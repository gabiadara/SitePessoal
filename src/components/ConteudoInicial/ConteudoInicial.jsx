import React from 'react'
import Navbar from '../Navbar'

import './ConteudoInicial.css'
const CoteudoInicial = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            <div  id='ConteudoInicial'>
                <div>
                    <h1>Apresentação</h1>
                    <p>Sou estudante de Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento de software adquirida durante estágio na área de Tecnologia da Informação.</p>

                    <h2>Áreas de Interesse</h2>
                </div>
            </div>
        </div>
    )
}

export default CoteudoInicial
