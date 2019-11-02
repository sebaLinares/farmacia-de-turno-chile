import React from 'react';
import PropTypes from 'prop-types';
import StyledMenuButton from '../StyledComps/StyledMenuButton';
import StyledButtonBar from '../StyledComps/StyledButtonBar';

const MenuIcon = ({ isOpen, toggleMenu }) => (
  <StyledMenuButton isOpen={isOpen} onClick={toggleMenu}>
    <StyledButtonBar />
    <StyledButtonBar />
    <StyledButtonBar />
  </StyledMenuButton>
);

MenuIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuIcon;
