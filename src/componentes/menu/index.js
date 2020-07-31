import React from 'react';
import logo from '../../assets/imagem/logo.png';
import './Menu.css';
import Button from '../button';
import {Link} from 'react-router-dom';

    function Menu() {
        return (
          <nav className="Menu">
              <Link to="/">
                <img className="Logo" src={logo} alt="yourflix logo"/>
              </Link>
               <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo video
               </Button>
          </nav>
        );
    }
    export default Menu;