import React from 'react'
import Navbar from '../Navbar'
import './ConteudoPortifolio.css'

const ConteudoPortifolio = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            <div id='ConteudoPortifolio'>
                <h1>Apresentação</h1>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">Modela</h2>
                                <p class="card-text">Protótipo de aplicativo desenvolvido para o Hackaton do IFSC 2026</p>
                                <a href="https://github.com/gabiadara/Modela" className="btn active" role="button" >Ver repositório</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">Site Pessoal</h2>
                                <p class="card-text">Site pessoal interativo e responsivo usando React</p>
                                <a href="https://github.com/gabiadara/SitePessoal" className="btn active" role="button" >Ver repositório</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteudoPortifolio
