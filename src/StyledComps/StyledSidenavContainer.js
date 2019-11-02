import styled from 'styled-components';
import { cardBackgroundColor, fontColor, invertSidenavMenuBackground } from '../theme/theme';

const SidenavContainer = styled.div`
  height: 100vh;
  width: ${props => (props.isOpen ? '50%' : '0px')};
  background-color: ${cardBackgroundColor};
  position: absolute;
  z-index: 9;
  right: 0px;
  top: 0px;
  transition: width 0.3s ease-in;
  color: ${fontColor};
  border-left: 4px solid ${invertSidenavMenuBackground};
`;

export default SidenavContainer;
