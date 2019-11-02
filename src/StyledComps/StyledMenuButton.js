import styled, { css } from 'styled-components';
import StyledButtonBar from './StyledButtonBar';
import { ShakeKeyFrame } from './KeyFrames';

const StyledMenuButton = styled.div`
  position: absolute;
  z-index: 99;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  &:hover {
    animation: ${ShakeKeyFrame} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  ${StyledButtonBar}:nth-child(1) {
    width: 38px;
    transform: ${props => props.isOpen
      && css`
        rotate(45deg) translate(8px, 12px);
    `};
  }
  ${StyledButtonBar}:nth-child(2) {
    width: 26px;
    ${props => props.isOpen
      && css`
        transform: rotate(-45deg) translate(-12px, 0px);
        width: 20px;
      `};
  }
  ${StyledButtonBar}:nth-child(3) {
    width: 18px;
    transform: ${props => props.isOpen
      && css`
        rotate(-45deg) translate(15px, -8px);
      `};
  }
`;

export default StyledMenuButton;