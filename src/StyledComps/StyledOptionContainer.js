import styled from 'styled-components';
import { invertSidenavMenuBackground } from '../theme/theme';

const StyledOptionContainer = styled.div`
  display: ${props => props.appear === false && 'none'};
  position: absolute;
  top: 44px;
  width: 100%;
  border: 4px solid ${invertSidenavMenuBackground};
  z-index: -1;
  max-height: 200px;
  overflow: scroll;
`;

export default StyledOptionContainer;
