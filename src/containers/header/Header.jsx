import React from 'react'
// import people from '../../assets/people.png'
import Prancheta_1 from '../../assets/Prancheta_1.png'
import './header.css'

const Header = () => {
  return (
    <div className='tpro__header section__padding' id='home' >
      <div className="tpro__header-content">

        <h1 className='gradient__text'>Vamos construir algo incrível com TurboPROO</h1>

        <p>Imagine uma plataforma que impulsiona suas vendas, otimiza sua gestão e transforma dados em decisões poderosas. Com o TurboPROO, você não está apenas acompanhando seus processos, está criando uma nova realidade para seu negócio. Juntos, podemos levar sua empresa ao próximo nível. Está pronto para o futuro? Vamos fazer acontecer!"</p>

        <div className="tpro__header-content__input">
          <input type="email" name="" id="" placeholder='Seu Email' />
          <button type='button'> Começar</button>
        </div>

        {/* <div className="tpro__header-content__people">
          <img src={people} alt="peoples" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>
        <div className="tpro__header-image">
          <img src={Prancheta_1} alt="ai" />
        </div>
    </div>
  )
}

export default Header