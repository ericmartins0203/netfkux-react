import React from 'react';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import { Logo, SideBar } from './header.styled';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Logo>
      <button type="button" onClick={() => handleClick()}>
        { !open ? (
          <span className="material-symbols-outlined">
            menu
          </span>
        ) : (
          <SideBar>
            <span className="material-symbols-outlined">logout</span>
            <span>Sair da conta</span>
          </SideBar>
        )}

      </button>
      <img src={logo} alt="logo netflix" />
      <img className="avatar" src={avatar} alt="logo netflix" />
    </Logo>
  );
}
