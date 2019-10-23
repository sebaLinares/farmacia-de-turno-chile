import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { menuBtnColor } from '../theme/theme';

const ButtonBar = styled.div`
  height: 4px;
  margin: 5px auto;
  background-color: ${menuBtnColor};
  transition: all 0.3s ease-out;
`;

const MenuButton = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${ButtonBar}:nth-child(1) {
    width: 42px;
    transform: ${props => props.isOpen
      && css`
        rotate(45deg) translate(8px, 12px);
    `};
  }
  ${ButtonBar}:nth-child(2) {
    width: 32px;
    ${props => props.isOpen
      && css`
        transform: rotate(-45deg) translate(-12px, -1.5px);
        width: 20px;
      `};
  }
  ${ButtonBar}:nth-child(3) {
    width: 20px;
    transform: ${props => props.isOpen
      && css`
        rotate(-45deg) translate(19px, -11px);
      `};
  }
`;

const MenuIcon = ({ isOpen, toggleMenu }) => {
  MenuIcon.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  return (
    <MenuButton isOpen={isOpen} onClick={toggleMenu}>
      <ButtonBar />
      <ButtonBar />
      <ButtonBar />
    </MenuButton>
  );
};

export default MenuIcon;
