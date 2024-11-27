import React from 'react'
import tproLogo from '../../assets/OnlyLogoWhite.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='tpro__footer section__padding'>
      <div className="tpro__footer-heading">
        <h1 className='gradient__text'>Você quer entrar no futuro antes dos outros</h1>
      </div>
      <div className="tpro__footer-btn">
        <a href="#plans"><p>Solicite acesso antecipado</p></a>
      </div>

      <div className="tpro__footer-links">
        <div className="tpro__footer-links_logo">
          <img src={tproLogo} alt="logo" />
          {/* <p>Criado por TurboPROO, Todos os Direitos Reservados</p> */}
        </div>
        <div className="tpro__footer-links_div">
          <h4>Social Media</h4>
          <a href="https://www.instagram.com/turboproo.atendimento/" target='blank'><p>Instagram</p></a>
          <p>Facebook</p>
          <p>Youtube</p>
          {/* <a href="https://create.wa.link/5511"><p>Whatsapp</p></a> */}
        </div>
        {/* <div className="tpro__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="tpro__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div> */}
      </div>
      <div className="tpro__footer-copyright">
        <p>© 2024 TurboPROO. Todos os Direitos Reservados.</p>
      </div>
    </div>
  )
}

export default Footer