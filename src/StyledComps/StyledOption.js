import styled from 'styled-components';
import {
  invertSidenavMenuBackground,
  fontColor,
  mainBackgroundColor,
  optionHover,
  invertColors,
} from '../theme/theme';

const StyledOption = styled.div`
  height: 100%;
  background-color: ${mainBackgroundColor};
  font-family: 'Open Sans';
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  color: ${fontColor};
  border-bottom: 4px solid ${invertSidenavMenuBackground};
  cursor: pointer;
  &:hover {
    background-color: ${optionHover};
    color: ${invertColors};
  }
`;

export default StyledOption;
