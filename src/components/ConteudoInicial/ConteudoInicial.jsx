import React from 'react'
import Navbar from '../Navbar'
import imgBack from './img_back.jpg'
import imgFront from './img_front.jpg'

import './ConteudoInicial.css'
const CoteudoInicial = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            <div id='ConteudoInicial'>
                <h1>Apresentação</h1>
                <p>Sou estudante de Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento de software adquirida durante estágio na área de Tecnologia da Informação.</p>

                <h2>Áreas de Interesse</h2>
                <div className='areasInteresse'>
                    <div className='back' >
                        <img src={imgBack} alt="Imagem backend" />
                        <div>
                            <h3>Desenvolvimento Front-end</h3>
                            <p>HTML, CSS, JavaScript, React, Bootstrap</p>
                        </div>
                    </div>
                    <div className='front' >
                        <img src={imgFront} alt="Imagem frontend" />
                        <div>
                            <h4>Desenvolvimento Back-end</h4>
                            <p>Java, Spring Boot, Spring WebFlux, Node, gRPC, REST APIs </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoteudoInicial
