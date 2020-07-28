import React from 'react';
import logo from '../../assets/imagem/logo.png';
import './Menu.css';
import Button from '../button';

    function Menu() {
        return (
          <nav className="Menu">
              <a href="/">
                <img className="Logo" src={logo} alt="yourflix logo"/>
              </a>
               <Button as="a" className="ButtonLink" href="/">
                    Novo video
               </Button>
          </nav>
        );
    }
    export default Menu;