import styled from 'styled-components';
import { cardBackgroundColor, invertSidenavMenuBackground } from '../theme/theme';

const StyledButton = styled.button`
  background-color: ${cardBackgroundColor};
  position: relative;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  border: 4px solid black;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  transition: 0.5s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
  p {
    font-family: 'Open Sans';
    letter-spacing: 2px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 0.25em 0.75em;
    color: ${invertSidenavMenuBackground};
  }
`;

export default StyledButton;
