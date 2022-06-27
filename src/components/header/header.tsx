import React from 'react';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import { Logo } from './header.styled';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Logo>

      { !open ? (
        <button type="button" onClick={() => handleClick()}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      ) : (
        <button type="button" onClick={() => handleClick()}>
          <span className="material-symbols-outlined">logout</span>
          <span className="close">Sair da conta</span>
        </button>
      )}

      <img src={logo} alt="logo netflix" />
      <img className="avatar" src={avatar} alt="logo netflix" />
    </Logo>
  );
}
