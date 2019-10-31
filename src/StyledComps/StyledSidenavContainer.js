import styled from 'styled-components';
import { sidenavMenuBackground, fontColor } from '../theme/theme';

const SidenavContainer = styled.div`
  height: 100vh;
  width: ${props => (props.isOpen ? '50%' : '0px')};
  background-color: ${sidenavMenuBackground};
  position: absolute;
  right: 0px;
  top: 0px;
  transition: width 0.3s ease-in;
  color: ${fontColor};
`;

export default SidenavContainer;
