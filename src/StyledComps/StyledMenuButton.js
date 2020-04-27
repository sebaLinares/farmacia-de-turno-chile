import styled, { css } from 'styled-components'
import StyledButtonBar from './StyledButtonBar'
import { ShakeKeyFrame } from './KeyFrames'
import device from './media-queries'

const StyledMenuButton = styled.div.attrs({
  className: 'cursor-pointer',
})`
  position: absolute;
  z-index: 99;
  top: 2.5rem;
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
    transition: transform .25s ease
    width: 28px;
    transform: ${props => props.isOpen
      && css`
        rotate(45deg) translate(8px, 12px);
    `};
  }
  ${StyledButtonBar}:nth-child(2) {
    width: 18px;
    transition: transform .25s ease
    ${({ isOpen }) => isOpen
      && css`
        transform: rotate(-45deg) translate(-12px, 0px);
        width: 20px;
      `};
  }
  ${StyledButtonBar}:nth-child(3) {
    width: 12px;
    transition: transform .25s ease
    transform: ${({ isOpen }) => isOpen
      && css`
        rotate(-45deg) translate(6px, -5px);
      `};
    }
  }
  @media ${device.tablet} {
    ${StyledButtonBar}:nth-child(1) {
      width: 38px;
      transition: transform .25s ease
      transform: ${({ isOpen }) => isOpen
        && css`
          rotate(45deg) translate(8px, 12px);
      `};
    }
    ${StyledButtonBar}:nth-child(2) {
      width: 26px;
      transtion: transform .25s ease
      ${({ isOpen }) => isOpen
        && css`
          transform: rotate(-45deg) translate(-12px, 0px);
          width: 20px;
        `};
    }
    ${StyledButtonBar}:nth-child(3) {
      width: 18px;
      transition: transform .25s ease
      transform: ${({ isOpen }) => isOpen
        && css`
          rotate(-45deg) translate(15px, -8px);
        `};
    }
  }
`

export default StyledMenuButton
