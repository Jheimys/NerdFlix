import React from 'react';
import { FooterBase } from './styles';
import logoFooter from '../../assets/img/logoFooter.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://portaldaobmep.impa.br/">
        <img src={logoFooter} alt="Logo footer" />
      </a>
      <p>
        Orgulhosamente promovendo
        {' '}
        <a href="https://portaldaobmep.impa.br/">
          cultura e ciência
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
