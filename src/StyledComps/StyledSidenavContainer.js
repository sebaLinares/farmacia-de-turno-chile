import styled, { css } from 'styled-components';
import { cardBackgroundColor, fontColor, invertSidenavMenuBackground } from '../theme/theme';
import device from './media-queries';

const SidenavContainer = styled.div(
  ({ isOpen }) => css`
    width: ${isOpen ? '90%' : '0px'};
    height: 100vh;
    background-color: ${cardBackgroundColor};
    position: absolute;
    z-index: 9;
    right: 0px;
    top: 0px;
    transition: width 0.3s ease-in;
    color: ${fontColor};
    border-left: 2px solid ${invertSidenavMenuBackground};
    height: 100%;
    @media ${device.tablet} {
      width: ${isOpen ? '50%' : '0px'};
      border-left: 4px solid ${invertSidenavMenuBackground};
    }
  `,
);

export default SidenavContainer;
