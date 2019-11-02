import styled from 'styled-components';
import { invertSidenavMenuBackground } from '../theme/theme';

const StyledButtonBar = styled.div`
  height: 5px;
  margin: 3px auto;
  background-color: ${invertSidenavMenuBackground};
  transition: all 0.3s ease-out;
`;

export default StyledButtonBar;
