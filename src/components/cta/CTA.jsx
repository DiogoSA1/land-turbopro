import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='tpro__cta' id='cta'>
      <div className="tpro__cta-content">
        {/* <p>Solicite acesso antecipado para Começar</p> */}
        <h3>Registre-se hoje e comece a explorar as infinitas possibilidades.</h3>
      </div>
      <div className="tpro__cta-btn">
        <a href="#plans"><button type='button'>Começar</button></a>
      </div>
    </div>
  )
}

export default CTA