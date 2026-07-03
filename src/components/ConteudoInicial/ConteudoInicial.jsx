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
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <div class="col">
                        <div class="card h-100">
                            <img src={imgBack} class="card-img-top" alt="Imagem backend" />
                            <div class="card-body">
                                <h3 class="card-title">Desenvolvimento Front-end</h3>
                                <p class="card-text">HTML, CSS, JavaScript, React, Bootstrap</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={imgFront} class="card-img-top" alt="Imagem frontend" />
                            <div class="card-body">
                                <h4 class="card-title">Desenvolvimento Back-end</h4>
                                <p class="card-text">Java, Spring Boot, Spring WebFlux, Node, gRPC, REST APIs</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoteudoInicial
