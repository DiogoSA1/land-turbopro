import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/OnlyLogoWhite.png'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whttpro">Sobre</a></p>
    <p><a href="#possibility">Integrações</a></p>
    <p><a href="#features">Serviços</a></p>
    <p><a href="#blog">Insights</a></p>
  </>
)


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='tpro__navbar'>
      <div className='tpro__navbar-links'>
        <div className='tpro__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='tpro__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="tpro__navbar-sign">
        <a href="https://app.turboproo.com.br" target="blank"><button type='button' class="sign">Entrar</button></a>
        <a href="#plans"><button type='button'>Registrar</button></a>
      </div>
      <div className="tpro__navbar-menu">
        {
          toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="tpro__navbar-menu_container scale-up-center">
              <div className="tpro__navbar-menu_container-links">
                <Menu />
                <div className="tpro__navbar-menu_container-links-sign">
                  <a href="https://app.turboproo.com.br" target="blank"><button type='button' class="sign">Entrar</button></a>
                  <a href="#plans"><button type='button'>Registrar</button></a>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar