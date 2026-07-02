import React from 'react'
import Navbar from '../Navbar'
import './ConteudoCurriculo.css'
import curriculo from './CurriculoGabrielaAdaraAmarante.pdf';

const ConteudoCurriculo = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>
            <Navbar />
            <div id='ConteudoCurriculo'>
                <div className='topicos'>
                    <h1>Formação Acadêmica</h1>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i className="bi bi-heart-arrow"></i> Análise e Desenvolvimento de Sistemas – IFSC - Conclusão prevista para
                            2026</li>
                        <li className="list-group-item"><i className="bi bi-heart-arrow"></i> Ensino Médio completo – Colégio Adventista – 2023</li>
                    </ul>
                </div>

                <div className='topicos'>
                    <h2>Formação Complementar</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i className="bi bi-heart-arrow"></i> Entra21 JAVA (480 horas) – SENAC Blumenau – 2024. O programa é financiado pelo
                            governo do estado através da FAPESC e Prefeitura de Blumenau, conta com aulas de
                            Inglês, Desenvolvimento Humano, Empreendedorismo e Inovação, Contabilidade e
                            Finanças e Formação Técnica.
                        </li>
                    </ul>
                </div>

                <div className='topicos'>
                    <h3>Formação Complementar</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i className="bi bi-heart-arrow"></i> Estágio em Tecnologia da Informação - Core Andina Group S.A.C - 2024 - Presente</li>
                    </ul>
                </div>

                <div className='botao'>
                    <a href={curriculo} download="CurriculoGabrielaAdaraAmarante.pdf"
                        className="btn active" role="button" >
                        <i className="bi bi-download"></i> Baixar Currículo
                    </a></div>
            </div>
        </div>
    )
}

export default ConteudoCurriculo
