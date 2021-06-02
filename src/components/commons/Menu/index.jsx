import React from 'react';
import { Logo } from '../../../theme/Logo/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';

export default function Menu() {

  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Pergutas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {
          links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          ))
        }
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}