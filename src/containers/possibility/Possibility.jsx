import React from 'react'
import './possibility.css'

import possibilityImage from '../../assets/Prancheta_8.png'

const Possibility = () => {
  return (
    <div className='tpro__possibility section__padding' id='possibility'>
      <div className="tpro__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="tpro__possibility-content">
        {/* <h4>Solicite acesso antecipado para Começar</h4> */}
        <h1 className='gradient__text'>Acesse o poder de um sistema eficaz na gestão do seu negócio.</h1>
        <p>Eleve sua gestão de clientes a outro nível: um sistema com integrações poderosas, como ChatGPT, Typebot, N8n e mais, para automações inteligentes, conversas humanizadas e processos otimizados que transformam a experiência do cliente e impulsionam seus resultados.</p>
        {/* <h4>Solicite acesso antecipado para Começar</h4> */}
      </div>
    </div>
  )
}

export default Possibility